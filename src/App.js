import { ThemeProvider, createTheme } from "@mui/material";
import AppRouter from "./router/AppRouter";
import store from "./app/store";
import { Provider } from "react-redux";
import { blueGrey } from "@mui/material/colors"

function App() {
  const theme = createTheme({
    palette: {
      warning: {
        light: "#ffb74d",
        main: "#ffa726",
        dark: "#f57c00",
      },
      secondary: {
        main: blueGrey["900"],
      },  
      
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
