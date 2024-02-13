import { ThemeProvider } from "./context/ThemeContext";
import Vertical from "./components/VerticalLine";
import AppRoutes from "./routes/app.routes";
import NavBar from "./components/NavBar";
import Global from "./Global";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <NavBar />
        <Global />
        <AppRoutes />
        <Vertical />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
