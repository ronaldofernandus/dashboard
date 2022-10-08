import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
// import EditOrder from "./Order/EditOrder";
// import Order from "./Order/Order";
// import DetailProduct from "./Product/DetailProduct";
import Dashboard from "./Dashboard/Dashboard";
import Item from "./Item/Item";
// import Succes from "./Succes/index";

function MainPageAfterLogin() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="">
          <Route path="" element={<Dashboard></Dashboard>}></Route>

          <Route path="/item" element={<Item></Item>}></Route>

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
