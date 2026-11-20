import { useStore } from "@nanostores/react"
import counterAtom from "@react/blocks/Counter/Counter.atom"
import { type EffectCallback, useEffect } from "react"

const setToLS = () =>
    localStorage.setItem("count", counterAtom.store.get().toString())

const getFromLS = () => {
    const countItem = localStorage.getItem("count")

    if (countItem !== null) {
        const countFromLS = parseInt(countItem)

        if (!Number.isNaN(countFromLS)) {
            return countFromLS
        }
    }

    return undefined
}

const decrementCount = () => {
    counterAtom.decrement()
    setToLS()
}

const incrementCount = () => {
    counterAtom.increment()
    setToLS()
}

const resetCount = () => {
    counterAtom.reset()
    setToLS()
}

const updateCount = (count: number) => {
    counterAtom.store.set(count)
    setToLS()
}

const onMountEffect: EffectCallback = () => {
    const count = getFromLS()

    if (count !== undefined) {
        counterAtom.store.set(count)
    }
}

const use = () => {
    const count = useStore(counterAtom.store)
    const isCountZero = count === 0

    return {
        count,
        decrementCount,
        incrementCount,
        isCountZero,
        resetCount,
        updateCount
    }
}

const onMount = () => useEffect(onMountEffect, [])

export default { onMount, use }
