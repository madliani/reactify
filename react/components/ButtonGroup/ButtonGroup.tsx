import type { BGViewProps } from "@react/components/ButtonGroup/ButtonGroup.view"

import "@react/components/ButtonGroup/ButtonGroup.style.css"
import ButtonGroupView from "@react/components/ButtonGroup/ButtonGroup.view"

export type BGProps = BGViewProps

export default (props: BGProps) => <ButtonGroupView {...props} />
