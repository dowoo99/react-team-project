import { Route, Routes, BrowserRouter } from "react-router-dom";
import Router from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Router></Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
