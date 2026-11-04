import type { ReactNode } from "react"

import { ButtonGroup as MUIButtonGroup } from "@mui/material"

export interface BGViewProps {
    children?: ReactNode | undefined
}

export default ({ children }: BGViewProps) => (
    <>
        <MUIButtonGroup
            className="btn-group__mobile"
            component="div"
            data-testid="btn-group__mobile"
            orientation="vertical"
        >
            {children}
        </MUIButtonGroup>

        <MUIButtonGroup
            className="btn-group__desktop"
            component="div"
            data-testid="btn-group__desktop"
            orientation="horizontal"
        >
            {children}
        </MUIButtonGroup>
    </>
)
