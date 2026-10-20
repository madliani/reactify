import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"
import type { ReactNode } from "react"

import { ButtonGroup as MUIButtonGroup } from "@mui/material"

export interface BGStyles {
    desktop?: SxProps<Theme> | undefined
    mobile?: SxProps<Theme> | undefined
}

export interface BGViewProps {
    children?: ReactNode | undefined
    styles?: BGStyles | undefined
}

export type ButtonGroupProps = BGViewProps

const ButtonGroupView = ({ children, styles }: BGViewProps) => (
    <>
        <MUIButtonGroup
            data-testid="btn-group__mobile-btns"
            orientation="vertical"
            sx={styles?.mobile}
        >
            {children}
        </MUIButtonGroup>

        <MUIButtonGroup
            data-testid="btn-group__desktop-btns"
            orientation="horizontal"
            sx={styles?.desktop}
        >
            {children}
        </MUIButtonGroup>
    </>
)

export { ButtonGroupView }
