import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"
import type { ReactNode } from "react"

import { ButtonGroup as MUIButtonGroup } from "@mui/material"

interface BGViewProps {
    children?: ReactNode | undefined
    desktopStyles?: SxProps<Theme> | undefined
    mobileStyles?: SxProps<Theme> | undefined
}

type ButtonGroupProps = BGViewProps

const ButtonGroupView = ({
    children,
    desktopStyles,
    mobileStyles: styles
}: BGViewProps) => (
    <>
        <MUIButtonGroup orientation="vertical" sx={styles}>
            {children}
        </MUIButtonGroup>

        <MUIButtonGroup orientation="horizontal" sx={desktopStyles}>
            {children}
        </MUIButtonGroup>
    </>
)

const ButtonGroup = (props: ButtonGroupProps) => <ButtonGroupView {...props} />

export { ButtonGroup }
