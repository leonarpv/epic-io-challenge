import styled from "styled-components"
import { Container } from "@material-ui/core";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  min-height: 250px;
  padding: 50px;
`
const CaptionContainer = styled.div`
  min-height: 100px;
  margin: 20px;
`
const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export { StyledContainer, CaptionContainer, PlayerContainer }
