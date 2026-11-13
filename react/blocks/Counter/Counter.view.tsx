import { Button, ButtonGroup, Card } from "react-bootstrap"

export interface CounterViewProps {
    count: number
    decrementCount: () => void
    incrementCount: () => void
    isCounterZero: boolean
    resetCount: () => void
}

export default (props: CounterViewProps) => {
    const { count, decrementCount, incrementCount, isCounterZero, resetCount } =
        props

    return (
        <Card as="div" className="w-96 h-96">
            <Button
                as="a"
                className="rounded-none font-bold text-3xl"
                data-testid="counter__title"
                href="https://github.com/madliani/reactify/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Counter
            </Button>

            <Card.Body
                as="div"
                className="flex flex-col flex-nowrap justify-center items-center gap-3"
            >
                <span
                    className="font-bold text-7xl"
                    data-testid="counter__count"
                    title={count.toString()}
                >
                    {count}
                </span>

                <ButtonGroup className="sm:hidden inline-flex" vertical>
                    <Button
                        className="font-bold text-xl"
                        data-testid="counter__inc-btn"
                        onClick={incrementCount}
                        title="Increment"
                        variant="success"
                    >
                        Increment
                    </Button>

                    <Button
                        className="font-bold text-xl"
                        data-testid="counter__dec-btn"
                        disabled={isCounterZero}
                        onClick={decrementCount}
                        title="Decrement"
                        variant="warning"
                    >
                        Decrement
                    </Button>
                </ButtonGroup>

                <ButtonGroup className="hidden sm:inline-flex">
                    <Button
                        className="font-bold text-xl"
                        data-testid="counter__inc-btn"
                        onClick={incrementCount}
                        title="Increment"
                        variant="success"
                    >
                        Increment
                    </Button>

                    <Button
                        className="font-bold text-xl"
                        data-testid="counter__dec-btn"
                        disabled={isCounterZero}
                        onClick={decrementCount}
                        title="Decrement"
                        variant="warning"
                    >
                        Decrement
                    </Button>
                </ButtonGroup>

                <Button
                    className="font-bold text-xl"
                    data-testid="counter__reset-btn"
                    onClick={resetCount}
                    title="Reset"
                    variant="danger"
                >
                    Reset
                </Button>
            </Card.Body>

            <Button
                as="a"
                className="rounded-none font-bold text-lg italic"
                data-testid="counter__attribution"
                href="https://github.com/madliani/"
                rel="noopener noreferrer"
                target="_blank"
            >
                by @madliani
            </Button>
        </Card>
    )
}
