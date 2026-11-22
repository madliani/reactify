import { useStore } from "@nanostores/react"
import counterAtom from "@react/blocks/Counter/Counter.atom"
import { type EffectCallback, useEffect } from "react"

export type SetToLS = () => void
export type GetFromLS = () => number | null

export type DecrementCount = () => void
export type IncrementCount = () => void
export type ResetCount = () => void
export type UpdateCount = (count: number) => void

export type Use = () => UseResult
export type UseOnMount = () => void

export interface UseResult {
    count: number
    decrementCount: DecrementCount
    incrementCount: IncrementCount
    isCountZero: boolean
    resetCount: ResetCount
    updateCount: UpdateCount
}

const setToLS: SetToLS = () => {
    localStorage.setItem("count", counterAtom.store.get().toString())
}

const getFromLS: GetFromLS = () => {
    const countItem = localStorage.getItem("count")

    if (countItem !== null) {
        const RADIX = 10,
            countFromLS = parseInt(countItem, RADIX)

        if (!Number.isNaN(countFromLS)) {
            return countFromLS
        }
    }

    return null
}
const decrementCount: DecrementCount = () => {
        counterAtom.decrement()
        setToLS()
    },
    incrementCount: IncrementCount = () => {
        counterAtom.increment()
        setToLS()
    },
    resetCount: ResetCount = () => {
        counterAtom.reset()
        setToLS()
    },
    updateCount: UpdateCount = (count: number) => {
        counterAtom.store.set(count)
        setToLS()
    }

const onMountEffect: EffectCallback = () => {
    const count = getFromLS()

    if (count !== null) {
        counterAtom.store.set(count)
    }
}

const use: Use = () => {
        const count = useStore(counterAtom.store),
            isCountZero = count === 0

        return {
            count,
            decrementCount,
            incrementCount,
            isCountZero,
            resetCount,
            updateCount
        }
    },
    useOnMount: UseOnMount = () => {
        useEffect(onMountEffect, [])
    }

export default { use, useOnMount }
