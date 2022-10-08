import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
// import EditOrder from "./Order/EditOrder";
// import Order from "./Order/Order";
// import DetailProduct from "./Product/DetailProduct";
import Dashboard from "./Dashboard/Dashboard";
import Item from "./Item/Item";
import Add from "./Add/add";
import AddActivity from "./AddActivity/AddActivity";

function MainPageAfterLogin() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="">
          <Route path="" element={<Dashboard></Dashboard>}></Route>

          <Route path="/item" element={<Item></Item>}></Route>
          <Route path="/add" element={<Add></Add>}></Route>
          <Route
            path="/AddActivity"
            element={<AddActivity></AddActivity>}
          ></Route>

          {/* <Route path="order">
            <Route path="" element={<Order></Order>}></Route>
            <Route path="edit">
              <Route path=":id" element={<EditOrder></EditOrder>}></Route>
            </Route>
            <Route path="delete">
              <Route path=":id"></Route>
            </Route>
            <Route path="checkout">
              <Route path=":id" element={<Succes></Succes>}></Route>
            </Route>
          </Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default MainPageAfterLogin;
