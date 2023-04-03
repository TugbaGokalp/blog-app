import { CssBaseline } from "@mui/material";
import AppRouter from "./router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, pink } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: pink["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
