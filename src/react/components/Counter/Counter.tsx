import { useStore } from "@nanostores/react"
import { Button, Heading } from "@radix-ui/themes"
import {
    counterAtom,
    decCount,
    incCount
} from "@react/components/Counter/Counter.atom"

interface CounterViewProps {
    count: number
    dec: () => void
    decIsDisabled: boolean
    inc: () => void
}

const CounterView = ({ count, dec, decIsDisabled, inc }: CounterViewProps) => {
    return (
        <section className="flex flex-col flex-nowrap justify-center gap-4">
            <Heading
                as="h1"
                className="text-center"
                data-testid="counter__heading"
                size="9"
                title={count.toString()}
            >
                {count}
            </Heading>
            <div className="flex flex-row flex-wrap justify-center gap-2">
                <Button
                    data-testid="counter__inc-btn"
                    onClick={inc}
                    title="Increment"
                    variant="solid"
                >
                    Increment
                </Button>
                <Button
                    data-testid="counter__dec-btn"
                    disabled={decIsDisabled}
                    onClick={dec}
                    title="Decrement"
                    variant="soft"
                >
                    Decrement
                </Button>
            </div>
        </section>
    )
}

const useCounterEffect = () => {
    const count = useStore(counterAtom)
    const decIsDisabled = count === 0

    const inc = () => incCount()
    const dec = () => decCount()

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

export { Counter, counterAtom }
