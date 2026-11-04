import type { BGViewProps } from "@react/components/ButtonGroup/ButtonGroup.view"

import { ButtonGroupView } from "@react/components/ButtonGroup/ButtonGroup.view"

export type ButtonGroupProps = BGViewProps

const ButtonGroup = (props: ButtonGroupProps) => <ButtonGroupView {...props} />

export { ButtonGroup }
