import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoDetail from "../pages/TodoDetail";
import Main from "../pages/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detail" element={<TodoDetail />} />
        <Route path="detail/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
