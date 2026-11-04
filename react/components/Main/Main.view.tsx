import type { ReactNode } from "react"

import { Box } from "@mui/material"
import "@react/components/Main/Main.style.css"

export interface MainViewProps {
    children?: ReactNode | undefined
    className?: string | undefined
}

export default ({ children, className }: MainViewProps) => (
    <Box className={className} component="main" data-testid="main">
        {children}
    </Box>
)
