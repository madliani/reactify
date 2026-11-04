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

const buttonGroupStyles: BGStyles = {
    desktop: {
        "@media (width >= 640px)": { display: "inline-flex" },
        display: "none"
    },
    mobile: {
        "@media (width >= 640px)": { display: "none" },
        display: "inline-flex"
    }
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
