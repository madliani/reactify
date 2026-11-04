import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"

export interface MainViewStyles {
    main: MUIStyles
}

export type MUIStyles = SxProps<Theme>

const mainViewStyles: MainViewStyles = {
    main: {
        alignItems: "center",
        display: "flex",
        flexFlow: "column wrap",
        height: "100svh",
        justifyContent: "center",
        weight: "100svw"
    }
}

export { mainViewStyles }
