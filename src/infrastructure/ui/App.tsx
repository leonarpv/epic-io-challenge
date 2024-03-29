import { Container, makeStyles } from "@material-ui/core";
import HomeProvider from "../../application/context/HomeContext/HomeProvider";
import { Home } from "./components/Organism/Home/Home";

const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 20,
    padding: 20,
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Container className={classes.app}>
      <HomeProvider>
        <Home />
      </HomeProvider>
    </Container>
  );
};

export default App;
