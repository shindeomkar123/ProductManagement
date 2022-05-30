import "./App.css";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AddUser from "./components/User/AddUser";
import ListUser from "./components/User/ListUser";
import AddProduct from "./components/Products/AddProduct";
import ListProducts from "./components/Products/ListProducts";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Dashboard from "./components/Home/Dashboard";
import UserDetails from "./components/User/UserDetails";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/home/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        >
          <Route path="" element={<Dashboard />} ></Route>
          <Route path="userManager">
            <Route index={true} element={<UserDetails />}></Route>
            <Route path="addUser" element={<AddUser />}></Route>
            <Route path="listUser" element={<ListUser />}></Route>
            <Route path="userDetails" element={<UserDetails />}></Route>
          </Route>
          <Route path="/home/newProduct" element={<AddProduct />}></Route>
          <Route path="/home/products" element={<ListProducts />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
