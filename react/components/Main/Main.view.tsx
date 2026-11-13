import type { ReactNode } from "react"

import "@react/components/Main/Main.style.css"

export interface MainViewProps {
    children?: ReactNode | undefined
    className?: string | undefined
}

export default ({ children, className }: MainViewProps) => (
    <main className={className} data-testid="main">
        {children}
    </main>
)
