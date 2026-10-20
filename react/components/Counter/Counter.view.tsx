import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"

import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Typography
} from "@mui/material"
import { ButtonGroup } from "@react/components/ButtonGroup/ButtonGroup"

export interface CounterViewProps {
    count: number
    dec: () => void
    decIsDisabled: boolean
    inc: () => void
    styles: CounterViewStyles
}

export interface CounterViewStyles {
    cardContent: MUIStyles
    count: MUIStyles
    desktopButtonGroup: MUIStyles
    mobileButtonGroup: MUIStyles
    title: MUIStyles
}

export type MUIStyles = SxProps<Theme>

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
    },
    title: {
        "@media (width >= 640px)": { fontSize: "3rem" },
        fontSize: "1.5rem",
        fontWeight: "bold",
        lineHeight: "1rem",
        paddingY: "1rem",
        textAlign: "center"
    }
}

const CounterView = (props: CounterViewProps) => {
    const { count, dec, decIsDisabled, inc, styles } = props

    return (
        <Card>
            <CardHeader
                slotProps={{ title: { sx: styles.title } }}
                title="Counter"
            />

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

export { CounterView, counterViewStyles }
