import type { BGStyles } from "@react/components/ButtonGroup/ButtonGroup.style"
import type { ReactNode } from "react"

import { ButtonGroup as MUIButtonGroup } from "@mui/material"
import buttonGroupStyles from "@react/components/ButtonGroup/ButtonGroup.style"

export interface BGViewProps {
    children?: ReactNode | undefined
    styles?: BGStyles | undefined
}

const ButtonGroupView = ({ children }: BGViewProps) => (
    <>
        <MUIButtonGroup
            component="div"
            data-testid="btn-group__mobile-btns"
            orientation="vertical"
            sx={buttonGroupStyles.mobile}
        >
            {children}
        </MUIButtonGroup>

        <MUIButtonGroup
            component="div"
            data-testid="btn-group__desktop-btns"
            orientation="horizontal"
            sx={buttonGroupStyles.desktop}
        >
            {children}
        </MUIButtonGroup>
    </>
)

export { ButtonGroupView }
