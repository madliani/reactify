import type { CounterViewStyles } from "@react/blocks/Counter/Counter.style"

import { Button, Card, CardContent, Typography } from "@mui/material"
import { ButtonGroup } from "@react/components/ButtonGroup/ButtonGroup"

export interface CounterViewProps {
    count: number
    decrement: () => void
    increment: () => void
    styles: CounterViewStyles
}

const CounterView = (props: CounterViewProps) => {
    const { count, decrement, increment, styles } = props

    return (
        <Card>
            <Button
                data-testid="counter__title"
                href="https://github.com/madliani/reactify/"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                sx={styles.title}
                target="_blank"
            >
                Counter
            </Button>

            <CardContent sx={styles.cardContent}>
                <Typography
                    component="span"
                    data-testid="counter__count"
                    sx={styles.count}
                    title={count.toString()}
                >
                    {count}
                </Typography>

                <ButtonGroup
                    styles={{
                        desktop: styles.desktopButtonGroup,
                        mobile: styles.mobileButtonGroup
                    }}
                >
                    <Button
                        color="primary"
                        data-testid="counter__inc-btn"
                        onClick={increment}
                        title="Increment"
                        variant="contained"
                    >
                        Increment
                    </Button>

                    <Button
                        color="error"
                        data-testid="counter__dec-btn"
                        disabled={count === 0}
                        onClick={decrement}
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
                sx={styles.attribution}
                target="_blank"
            >
                by @madliani
            </Button>
        </Card>
    )
}

export { CounterView }
