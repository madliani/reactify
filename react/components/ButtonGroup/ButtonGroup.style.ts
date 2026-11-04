import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"

export interface BGStyles {
    desktop: SxProps<Theme>
    mobile: SxProps<Theme>
}

export default {
    desktop: {
        "@media (width >= 640px)": { display: "inline-flex" },
        display: "none"
    },
    mobile: {
        "@media (width >= 640px)": { display: "none" },
        display: "inline-flex"
    }
} as const satisfies BGStyles
