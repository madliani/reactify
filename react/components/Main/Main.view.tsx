import type { ReactNode } from "react"

import { Box } from "@mui/material"
import { mainViewStyles } from "@react/components/Main/Main.style"

export interface MainViewProps {
    children?: ReactNode
}

const MainView = ({ children }: MainViewProps) => (
    <Box component="main" data-testid="main" sx={mainViewStyles.main}>
        {children}
    </Box>
)

export { MainView }
