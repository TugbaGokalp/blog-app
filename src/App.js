import CssBaseline from "@mui/material/CssBaseline";
import AppRouter from "./router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, blueGrey, pink, teal } from "@mui/material/colors";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: teal["200"],
        light: teal["100"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}
export default App;
