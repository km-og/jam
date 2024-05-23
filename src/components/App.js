import { Route, Routes } from "react-router-dom";
import "./App.css";
import Background from "./Background/Background";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <div className="page">
      <Background />
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
