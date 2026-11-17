import { Button, ButtonGroup, Card, Link } from "@heroui/react"

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
        <Card className="counter__card">
            <Link
                className="counter__title"
                data-testid="counter__title"
                href="https://github.com/madliani/reactify/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Reactify
            </Link>

            <Card.Content className="counter__content">
                <span
                    className="counter__count"
                    data-testid="counter__count"
                    title={count.toString()}
                >
                    {count}
                </span>

                <ButtonGroup
                    className="counter__btn-group--mobile"
                    orientation="vertical"
                >
                    <Button
                        className="counter__btn"
                        data-testid="counter__inc-btn"
                        onClick={incrementCount}
                        variant="primary"
                    >
                        Increment
                    </Button>

                    <Button
                        className="counter__btn"
                        data-testid="counter__dec-btn"
                        isDisabled={isCounterZero}
                        onClick={decrementCount}
                        variant="secondary"
                    >
                        Decrement
                    </Button>
                </ButtonGroup>

                <ButtonGroup
                    className="counter__btn-group--desktop"
                    orientation="horizontal"
                >
                    <Button
                        className="counter__btn"
                        data-testid="counter__inc-btn"
                        onClick={incrementCount}
                        variant="primary"
                    >
                        Increment
                    </Button>

                    <Button
                        className="counter__btn"
                        data-testid="counter__dec-btn"
                        isDisabled={isCounterZero}
                        onClick={decrementCount}
                        variant="secondary"
                    >
                        Decrement
                    </Button>
                </ButtonGroup>

                <Button
                    className="counter__btn"
                    data-testid="counter__reset-btn"
                    onClick={resetCount}
                    variant="danger"
                >
                    Reset
                </Button>
            </Card.Content>

            <Link
                className="counter__annotation"
                data-testid="counter__attribution"
                href="https://github.com/madliani/"
                rel="noopener noreferrer"
                target="_blank"
            >
                @madliani
            </Link>
        </Card>
    )
}
