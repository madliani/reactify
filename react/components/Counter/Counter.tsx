import { useStore } from "@nanostores/react"
import {
    counterAtom,
    decCount,
    incCount
} from "@react/components/Counter/Counter.atom"
import {
    CounterView,
    counterViewStyles
} from "@react/components/Counter/Counter.view"

const useCounter = () => {
    const count = useStore(counterAtom)
    const decIsDisabled = count === 0

    const inc = () => incCount()
    const dec = () => decCount()

    return { count, dec, decIsDisabled, inc }
}

const Counter = () => {
    const { count, dec, decIsDisabled, inc } = useCounter()

    return (
        <CounterView
            count={count}
            dec={dec}
            decIsDisabled={decIsDisabled}
            inc={inc}
            styles={counterViewStyles}
        />
    )
}

export { Counter, counterAtom, useCounter }
