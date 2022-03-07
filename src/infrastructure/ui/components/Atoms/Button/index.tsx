import { Button as MButton, ButtonProps } from "@material-ui/core"

const Button = ({ children, ...restProps }: ButtonProps) => {
  return <MButton {...restProps}>{children}</MButton>
}

export default Button
