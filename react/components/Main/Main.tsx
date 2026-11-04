import type { MainViewProps } from "@react/components/Main/Main.view"

import MainView from "@react/components/Main/Main.view"

export type MainProps = MainViewProps

export default ({ children }: MainProps) => (
    <MainView className="main">{children}</MainView>
)
