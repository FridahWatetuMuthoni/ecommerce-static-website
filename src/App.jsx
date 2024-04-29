import { Button, Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import Navbar from "./components/Navbar/Navbar";
import useGlobalContex from "./hooks/useGlobalContex";

function App() {
  const { mode } = useGlobalContex();
  return (
    <ThemeProvider theme={theme(mode)}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Navbar />
        <Button variant="contained">Change Mode</Button>
        <Button variant="contained" color="secondary">
          Change Mode
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
