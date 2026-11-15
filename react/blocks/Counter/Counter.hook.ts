import { useStore } from "@nanostores/react"
import CounterAtom from "@react/blocks/Counter/Counter.atom"
import { type EffectCallback, useEffect } from "react"

const setToLS = () =>
    localStorage.setItem("count", CounterAtom.store.get().toString())

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
    CounterAtom.decrement()
    setToLS()
}

const incrementCount = () => {
    CounterAtom.increment()
    setToLS()
}

const resetCount = () => {
    CounterAtom.reset()
    setToLS()
}

const updateCount = (count: number) => {
    CounterAtom.store.set(count)
    setToLS()
}

const onMountEffect: EffectCallback = () => {
    const count = getFromLS()

    if (count !== undefined) {
        CounterAtom.store.set(count)
    }
}

const use = () => {
    const count = useStore(CounterAtom.store)
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
