import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"
import type { ReactNode } from "react"

import { Box } from "@mui/material"

export interface MainViewProps {
    children?: ReactNode
}

export interface MainViewStyles {
    main: MUIStyles
}

type MUIStyles = SxProps<Theme>

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

const MainView = ({ children }: MainViewProps) => (
    <Box component="main" data-testid="main" sx={mainViewStyles.main}>
        {children}
    </Box>
)

export { MainView, mainViewStyles }
