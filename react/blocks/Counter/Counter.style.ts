import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"

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

export { counterViewStyles }
