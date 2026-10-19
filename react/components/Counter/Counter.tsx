import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"

import {
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Typography
} from "@mui/material"
import { useStore } from "@nanostores/react"
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

const counterViewStyles: Record<string, SxProps<Theme>> = {
    counterButtons: {
        "@media (width >= 640px)": { display: "none" },
        display: "inline-flex"
    },
    counterCardContent: {
        "@media (width >= 640px)": { height: "24rem", width: "24rem" },
        alignItems: "center",
        display: "flex",
        flexFlow: "column nowrap",
        gap: "2rem",
        height: "12rem",
        justifyContent: "center",
        width: "12rem"
    },
    counterDesktopButtons: {
        "@media (width >= 640px)": { display: "inline-flex" },
        display: "none"
    },
    counterHeading: {
        "@media (width >= 640px)": { fontSize: "4.5rem" },
        fontSize: "3rem",
        fontWeight: "bold",
        lineHeight: "1rem",
        textAlign: "center"
    }
}

const CounterView = ({ count, dec, decIsDisabled, inc }: CounterViewProps) => {
    return (
        <Card>
            <CardContent sx={counterViewStyles["counterCardContent"]}>
                <Typography
                    component="span"
                    data-testid="counter__heading"
                    sx={counterViewStyles["counterHeading"]}
                    title={count.toString()}
                >
                    {count}
                </Typography>
                <ButtonGroup
                    orientation="vertical"
                    sx={counterViewStyles["counterButtons"]}
                >
                    <Button
                        color="primary"
                        data-testid="counter__inc-btn"
                        onClick={inc}
                        title="Increment"
                        variant="contained"
                    >
                        Increment
                    </Button>
                    <Button
                        color="error"
                        data-testid="counter__dec-btn"
                        disabled={decIsDisabled}
                        onClick={dec}
                        title="Decrement"
                        variant="contained"
                    >
                        Decrement
                    </Button>
                </ButtonGroup>
                <ButtonGroup
                    orientation="horizontal"
                    sx={counterViewStyles["counterDesktopButtons"]}
                >
                    <Button
                        color="primary"
                        data-testid="counter__inc-btn--desktop"
                        onClick={inc}
                        title="Increment"
                        variant="contained"
                    >
                        Increment
                    </Button>
                    <Button
                        color="error"
                        data-testid="counter__dec-btn--desktop"
                        disabled={decIsDisabled}
                        onClick={dec}
                        title="Decrement"
                        variant="contained"
                    >
                        Decrement
                    </Button>
                </ButtonGroup>
            </CardContent>
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
