import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"

import { Button, Card, CardContent, Typography } from "@mui/material"
import { useStore } from "@nanostores/react"
import { ButtonGroup } from "@react/components/ButtonGroup/ButtonGroup"
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
    buttonGroup: {
        "@media (width >= 640px)": { display: "none" },
        display: "inline-flex"
    },
    cardContent: {
        "@media (width >= 640px)": { height: "24rem", width: "24rem" },
        alignItems: "center",
        display: "flex",
        flexFlow: "column nowrap",
        gap: "2rem",
        height: "12rem",
        justifyContent: "center",
        width: "12rem"
    },
    desktopButtonGroup: {
        "@media (width >= 640px)": { display: "inline-flex" },
        display: "none"
    },
    heading: {
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
            <CardContent sx={counterViewStyles["cardContent"]}>
                <Typography
                    component="span"
                    data-testid="counter__heading"
                    sx={counterViewStyles["heading"]}
                    title={count.toString()}
                >
                    {count}
                </Typography>

                <ButtonGroup
                    desktopStyles={counterViewStyles["desktopButtonGroup"]}
                    styles={counterViewStyles["buttonGroup"]}
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
