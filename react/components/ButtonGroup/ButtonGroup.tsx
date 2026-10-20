import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"
import type { ReactNode } from "react"

import { ButtonGroup as MUIButtonGroup } from "@mui/material"

interface BGStyles {
    desktop?: SxProps<Theme> | undefined
    mobile?: SxProps<Theme> | undefined
}

interface BGViewProps {
    children?: ReactNode | undefined
    styles?: BGStyles | undefined
}

type ButtonGroupProps = BGViewProps

const ButtonGroupView = ({ children, styles }: BGViewProps) => (
    <>
        <MUIButtonGroup orientation="vertical" sx={styles?.mobile}>
            {children}
        </MUIButtonGroup>

        <MUIButtonGroup orientation="horizontal" sx={styles?.desktop}>
            {children}
        </MUIButtonGroup>
    </>
)

const ButtonGroup = (props: ButtonGroupProps) => <ButtonGroupView {...props} />

export { ButtonGroup }
