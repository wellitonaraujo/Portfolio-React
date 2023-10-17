import { ThemeProvider } from "./context/ThemeContext";
import Vertical from "./components/VerticalLine";
import AppRoutes from "./routes/app.routes";
import NavBar from "./components/NavBar";
import Global from "./Global";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Global />
      <AppRoutes />
      <Vertical />
    </ThemeProvider>
  );
}

export default App;
