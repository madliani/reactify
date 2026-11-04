import type { ReactNode } from "react"

import { Box } from "@mui/material"
import mainViewStyles from "@react/components/Main/Main.style"

export interface MainViewProps {
    children?: ReactNode
}

export default ({ children }: MainViewProps) => (
    <Box component="main" data-testid="main" sx={mainViewStyles.main}>
        {children}
    </Box>
)
