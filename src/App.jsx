import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import Navbar from "./components/Navbar/Navbar";
import useGlobalContext from "./hooks/useGlobalContext";
import Banner from "./components/Banner/Banner";
import AppDrawer from "./components/Drawer/AppDrawer";

function App() {
  const { mode } = useGlobalContext();
  return (
    <ThemeProvider theme={theme(mode)}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Navbar />
        <Banner />
        <AppDrawer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
