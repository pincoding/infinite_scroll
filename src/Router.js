import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
