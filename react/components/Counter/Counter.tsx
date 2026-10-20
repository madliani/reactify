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
    styles: CounterViewStyles
}

interface CounterViewStyles {
    cardContent: MUIStyles
    count: MUIStyles
    desktopButtonGroup: MUIStyles
    mobileButtonGroup: MUIStyles
}

type MUIStyles = SxProps<Theme>

const counterViewStyles: CounterViewStyles = {
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
    count: {
        "@media (width >= 640px)": { fontSize: "4.5rem" },
        fontSize: "3rem",
        fontWeight: "bold",
        lineHeight: "1rem",
        textAlign: "center"
    },
    desktopButtonGroup: {
        "@media (width >= 640px)": { display: "inline-flex" },
        display: "none"
    },
    mobileButtonGroup: {
        "@media (width >= 640px)": { display: "none" },
        display: "inline-flex"
    }
}

const CounterView = (props: CounterViewProps) => {
    const { count, dec, decIsDisabled, inc, styles } = props

    return (
        <Card>
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
            styles={counterViewStyles}
        />
    )
}

export { Counter, counterAtom, useCounter }
