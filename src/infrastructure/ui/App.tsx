import { Container, makeStyles } from "@material-ui/core"

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
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Container>
  )
}

export default App
