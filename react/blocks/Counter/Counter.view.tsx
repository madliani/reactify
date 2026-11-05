import { Button, Card, CardContent, Typography } from "@mui/material"
import "@react/blocks/Counter/Counter.style.css"
import ButtonGroup from "@react/components/ButtonGroup/ButtonGroup"

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
        <Card component="div">
            <Button
                className="counter__title"
                data-testid="counter__title"
                href="https://github.com/madliani/reactify/"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                target="_blank"
            >
                Counter
            </Button>

            <CardContent className="counter__card-content" component="div">
                <Typography
                    className="counter__count"
                    component="span"
                    data-testid="counter__count"
                    title={count.toString()}
                >
                    {count}
                </Typography>

                <ButtonGroup>
                    <Button
                        color="success"
                        data-testid="counter__inc-btn"
                        onClick={incrementCount}
                        title="Increment"
                        variant="contained"
                    >
                        Increment
                    </Button>

                    <Button
                        color="warning"
                        data-testid="counter__dec-btn"
                        disabled={isCounterZero}
                        onClick={decrementCount}
                        title="Decrement"
                        variant="contained"
                    >
                        Decrement
                    </Button>
                </ButtonGroup>

                <Button
                    color="error"
                    data-testid="counter__reset-btn"
                    onClick={resetCount}
                    title="Reset"
                    variant="contained"
                >
                    Reset
                </Button>
            </CardContent>

            <Button
                className="counter__attribution"
                data-testid="counter__attribution"
                href="https://github.com/madliani/"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                target="_blank"
            >
                by @madliani
            </Button>
        </Card>
    )
}
