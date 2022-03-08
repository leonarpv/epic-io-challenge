import styled from "styled-components"
import { Container } from "@material-ui/core"

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`
const StyledImage = styled.img`
  height: 100px;
`
const StyledSpan = styled.span`
  margin: 20px;
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  min-height: 400px;
  padding: 50px;
  & .MuiSelect-select.MuiSelect-select {
    display: flex;
  }
  & img {
    height: 50px;
  }
  & spam {
    vertical-align: center;
  }
`;

export { LoaderContainer, StyledContainer, StyledImage, StyledSpan }
