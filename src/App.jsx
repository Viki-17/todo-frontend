import Login from "./Components/Login";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import TodoList from "./Components/TodoList";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="todo" element={<TodoList />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
