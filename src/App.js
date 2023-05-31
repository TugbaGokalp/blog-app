import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AppRouter from "./router/AppRouter";
import store, { persistor } from "./app/store";
import { Provider } from "react-redux";
import { blueGrey } from "@mui/material/colors"
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

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
      <CssBaseline/>
      <Provider store={store}>

        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
        
      </Provider>
      <ToastContainer/>
    </ThemeProvider>
  );
}

export default App;
