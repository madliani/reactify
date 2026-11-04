import { Button, Card, CardContent, Typography } from "@mui/material"
import { counterStyles } from "@react/blocks/Counter/Counter.style"
import { ButtonGroup } from "@react/components/ButtonGroup/ButtonGroup"

export interface CounterViewProps {
    count: number
    decrementCount: () => void
    incrementCount: () => void
    isDisabled: boolean
}

const CounterView = (props: CounterViewProps) => {
    const { count, decrementCount, incrementCount, isDisabled } = props

    return (
        <Card>
            <Button
                data-testid="counter__title"
                href="https://github.com/madliani/reactify/"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                sx={counterStyles.title}
                target="_blank"
            >
                Counter
            </Button>

            <CardContent sx={counterStyles.cardContent}>
                <Typography
                    component="span"
                    data-testid="counter__count"
                    sx={counterStyles.count}
                    title={count.toString()}
                >
                    {count}
                </Typography>

                <ButtonGroup
                    styles={{
                        desktop: counterStyles.desktopButtonGroup,
                        mobile: counterStyles.mobileButtonGroup
                    }}
                >
                    <Button
                        color="primary"
                        data-testid="counter__inc-btn"
                        onClick={incrementCount}
                        title="Increment"
                        variant="contained"
                    >
                        Increment
                    </Button>

                    <Button
                        color="error"
                        data-testid="counter__dec-btn"
                        disabled={isDisabled}
                        onClick={decrementCount}
                        title="Decrement"
                        variant="contained"
                    >
                        Decrement
                    </Button>
                </ButtonGroup>
            </CardContent>

            <Button
                data-testid="counter__attribution"
                href="https://github.com/madliani/"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                sx={counterStyles.attribution}
                target="_blank"
            >
                by @madliani
            </Button>
        </Card>
    )
}

export { CounterView }
