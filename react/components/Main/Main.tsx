import type { MainViewProps } from "@react/components/Main/Main.view"

import MainView from "@react/components/Main/Main.view"

type MainProps = MainViewProps

export default ({ children }: MainProps) => <MainView>{children}</MainView>
