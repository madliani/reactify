import { Button, ButtonGroup, Typography } from "@heroui/react"
import { atom, useAtom } from "jotai"

import "./Counter.style.css"

const counterAtom = atom<number>(0)

interface CounterViewProps {
    count: number
    dec: () => void
    decIsDisabled: boolean
    inc: () => void
}

const CounterView = ({ count, dec, decIsDisabled, inc }: CounterViewProps) => {
    return (
        <div className="counter">
            <Typography.Heading data-testid="counter__heading" level={1}>
                {count}
            </Typography.Heading>
            <ButtonGroup className="counter__btn-group">
                <Button onClick={inc}>Increment</Button>
                <Button isDisabled={decIsDisabled} onClick={dec}>
                    Decrement
                </Button>
            </ButtonGroup>
        </div>
    )
}

const useCounterEffect = () => {
    const [count, setCount] = useAtom(counterAtom)
    const decIsDisabled = count === 0

    const inc = () => setCount(count + 1)
    const dec = () => setCount(count - 1)

    return { count, dec, decIsDisabled, inc }
}

const Counter = () => {
    const { count, dec, decIsDisabled, inc } = useCounterEffect()

    return (
        <CounterView
            count={count}
            dec={dec}
            decIsDisabled={decIsDisabled}
            inc={inc}
        />
    )
}

export { Counter }
