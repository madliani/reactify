import "@react/blocks/Counter/Counter.style.css"
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
        <Card as="div">
            <Button
                as="a"
                className="counter__title"
                data-testid="counter__title"
                href="https://github.com/madliani/reactify/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Counter
            </Button>

            <Card.Body as="div" className="counter__card-content">
                <span
                    className="counter__count"
                    data-testid="counter__count"
                    title={count.toString()}
                >
                    {count}
                </span>

                <ButtonGroup className="counter__btn-group--mobile" vertical>
                    <Button
                        data-testid="counter__inc-btn"
                        onClick={incrementCount}
                        title="Increment"
                        variant="success"
                    >
                        Increment
                    </Button>

                    <Button
                        data-testid="counter__dec-btn"
                        disabled={isCounterZero}
                        onClick={decrementCount}
                        title="Decrement"
                        variant="warning"
                    >
                        Decrement
                    </Button>
                </ButtonGroup>

                <ButtonGroup className="counter__btn-group--desktop">
                    <Button
                        data-testid="counter__inc-btn"
                        onClick={incrementCount}
                        title="Increment"
                        variant="success"
                    >
                        Increment
                    </Button>

                    <Button
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
                className="counter__attribution"
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
