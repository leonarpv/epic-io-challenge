import {
  ButtonGroup as MButtonGroup,
  ButtonGroupProps,
} from "@material-ui/core"

const ButtonGroup = ({ children, ...restProps }: ButtonGroupProps) => {
  return <MButtonGroup {...restProps}>{children}</MButtonGroup>
}

export default ButtonGroup
