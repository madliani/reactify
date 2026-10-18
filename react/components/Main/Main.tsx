import type { ReactNode } from "react"

import { Box } from "@mui/material"

type MainProps = MainViewProps

interface MainViewProps {
    children: ReactNode
}

const MainView = ({ children }: MainViewProps) => (
    <Box
        component="main"
        sx={{
            alignItems: "center",
            display: "flex",
            flexFlow: "column wrap",
            height: "100svh",
            justifyContent: "center",
            weight: "100svw"
        }}
    >
        {children}
    </Box>
)

const Main = ({ children }: MainProps) => <MainView>{children}</MainView>

export { Main }
