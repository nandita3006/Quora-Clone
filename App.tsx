import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Answers from "./components/Answers";

const App = () => {
  console.log("App component rendered");

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/main" element={<Main />} />
      <Route path="/answers" element={<Answers />} />
    </Routes>
  );
};

export default App;
