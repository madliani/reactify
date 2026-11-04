import type { BGViewProps } from "@react/components/ButtonGroup/ButtonGroup.view"

import ButtonGroupView from "@react/components/ButtonGroup/ButtonGroup.view"

export type BGProps = BGViewProps

const ButtonGroup = (props: BGProps) => <ButtonGroupView {...props} />

export { ButtonGroup }
