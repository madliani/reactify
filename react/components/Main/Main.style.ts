import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"

export interface MainViewStyles {
    main: MUIStyles
}

export type MUIStyles = SxProps<Theme>

export default {
    main: {
        alignItems: "center",
        display: "flex",
        flexFlow: "column wrap",
        height: "100svh",
        justifyContent: "center",
        weight: "100svw"
    }
} as const satisfies MainViewStyles
