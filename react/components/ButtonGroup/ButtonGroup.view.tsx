import type { ReactNode } from "react"

export interface BGViewProps {
    children?: ReactNode | undefined
}

export default ({ children }: BGViewProps) => (
    <div className="btn-group" data-testid="btn-group">
        {children}
    </div>
)
