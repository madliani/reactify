import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"

import { Button, Card, CardContent, Typography } from "@mui/material"
import { ButtonGroup } from "@react/components/ButtonGroup/ButtonGroup"

export interface CounterViewProps {
    count: number
    dec: () => void
    decIsDisabled: boolean
    inc: () => void
    styles: CounterViewStyles
}

export interface CounterViewStyles {
    attribution: MUIStyles
    card: MUIStyles
    cardContent: MUIStyles
    count: MUIStyles
    desktopButtonGroup: MUIStyles
    mobileButtonGroup: MUIStyles
    title: MUIStyles
}

export type MUIStyles = SxProps<Theme>

const counterViewStyles: CounterViewStyles = {
    attribution: {
        "@media (width >= 640px)": { fontSize: "1rem", paddingY: "1rem" },
        fontSize: "0.5rem",
        lineHeight: "1rem",
        paddingY: "0.5rem",
        textAlign: "center",
        width: "100%"
    },
    card: {
        alignItems: "center",
        display: "flex",
        flexFlow: "column nowrap",
        gap: "1rem",
        justifyContent: "center"
    },
    cardContent: {
        "@media (width >= 640px)": {
            gap: "2.5rem",
            height: "24rem",
            width: "24rem"
        },
        alignItems: "center",
        display: "flex",
        flexFlow: "column nowrap",
        gap: "1.5rem",
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
        "@media (width >= 640px)": { fontSize: "3.5rem", paddingY: "2rem" },
        fontSize: "1.5rem",
        fontWeight: "bold",
        lineHeight: "1rem",
        paddingY: "1rem",
        textAlign: "center",
        width: "100%"
    }
}

const CounterView = (props: CounterViewProps) => {
    const { count, dec, decIsDisabled, inc, styles } = props

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

            <Button
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

export { CounterView, counterViewStyles }
