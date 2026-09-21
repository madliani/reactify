import { Button, Flex, Heading } from "@radix-ui/themes"
import { counterAtom } from "@src/react/Counter/Counter.atom"
import { useAtom } from "jotai"

interface CounterViewProps {
    count: number
    dec: () => void
    decIsDisabled: boolean
    inc: () => void
}

const CounterView = ({ count, dec, decIsDisabled, inc }: CounterViewProps) => {
    return (
        <Flex
            align="center"
            direction="column"
            gap="2"
            justify="center"
            wrap="nowrap"
        >
            <Heading
                as="h1"
                data-testid="counter__heading"
                size="9"
                title={count.toString()}
            >
                {count}
            </Heading>
            <Flex
                align="center"
                direction="row"
                gap="1"
                justify="center"
                wrap="wrap"
            >
                <Button onClick={inc} title="Increment" variant="solid">
                    Increment
                </Button>
                <Button
                    disabled={decIsDisabled}
                    onClick={dec}
                    title="Decrement"
                    variant="soft"
                >
                    Decrement
                </Button>
            </Flex>
        </Flex>
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

export { Counter, counterAtom }
