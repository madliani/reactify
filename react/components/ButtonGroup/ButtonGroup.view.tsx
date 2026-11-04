import type { ReactNode } from "react"

import { ButtonGroup as MUIButtonGroup } from "@mui/material"
import buttonGroupStyles from "@react/components/ButtonGroup/ButtonGroup.style"

export interface BGViewProps {
    children?: ReactNode | undefined
}

export default ({ children }: BGViewProps) => (
    <>
        <MUIButtonGroup
            component="div"
            data-testid="btn-group__mobile"
            orientation="vertical"
            sx={buttonGroupStyles.mobile}
        >
            {children}
        </MUIButtonGroup>

        <MUIButtonGroup
            component="div"
            data-testid="btn-group__desktop"
            orientation="horizontal"
            sx={buttonGroupStyles.desktop}
        >
            {children}
        </MUIButtonGroup>
    </>
)
