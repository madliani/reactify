import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"

export interface BGStyles {
    desktop?: SxProps<Theme> | undefined
    mobile?: SxProps<Theme> | undefined
}

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

export { buttonGroupStyles }
