import styled from "styled-components"
import ReactPlayer from "react-player"
const StyledVideoContainer = styled.div`
  width: 700px;
  height: 400px;
  & div,
  video {
    position: absolute;
  }
`
const StyledVideoPlayer = styled(ReactPlayer)`
  z-index: 1;
  position: relative;
`
interface LightProps {
  lightPercentage: number
}
const StyledVideoLight = styled.div<LightProps>`
  z-index: 2;
  position: relative;
  width: 640px;
  height: 360px;
  background: ${(props: LightProps) =>
    `rgba(255, 255, 255, ${props.lightPercentage})`};
`

export { StyledVideoContainer, StyledVideoPlayer, StyledVideoLight }
