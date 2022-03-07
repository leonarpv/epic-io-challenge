import { Container, makeStyles } from "@material-ui/core"
import { BrowserRouter } from "react-router-dom"
import { Home } from "./components/Organism/Home/Home"

const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
})

const App = () => {
  const classes = useStyles()
  return (
    <Container className={classes.app}>
      <Home />
    </Container>
  )
}

export default App
