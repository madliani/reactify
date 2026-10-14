import { useStore } from "@nanostores/react"
import { Button, Card, Flex, Text } from "@radix-ui/themes"
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
        <Card className="flex h-48 w-48 flex-col flex-nowrap justify-center gap-4 sm:h-96 sm:w-96">
            <Text
                as="span"
                className="text-center text-5xl font-bold sm:text-7xl"
                data-testid="counter__heading"
                title={count.toString()}
            >
                {count}
            </Text>
            <Flex className="flex-row flex-wrap justify-center gap-2">
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
            </Flex>
        </Card>
    )
}

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
        />
    )
}

export { Counter, counterAtom, useCounter }
