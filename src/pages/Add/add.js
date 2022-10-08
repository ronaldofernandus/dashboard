import React from "react";
import "./Add.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosClose } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
const Add = () => {
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: white;
      position: absolute;
      width: 205px;
      height: 52px;
      left: 30px;
      top: 120px;

    }

    .btn-two {
      position: absolute;
      width: 205px;
      height: 52px;
      left: 30px;
      top: 292px;
      
      background: #FFFFFF;
      border: 1px solid #E5E5E5;
    }
    `}
      </style>
      <div className="container">
        <div className="container">
          <div className="row">
            <div
              class="card"
              style={{
                position: "absolute",
                height: "403px",
                width: "830px",
                left: "auto",
                top: "200px",
                boxShadow: " 0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
              }}
            >
              <div className="row">
                <h1
                  className="modal-add-title"
                  style={{
                    position: "absolute",
                    height: "27px",
                    width: "159px",
                    left: "30px",
                    top: "24px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "27px",
                    /* identical to box height */

                    color: "#111111",
                  }}
                >
                  Activity
                </h1>
                <span>
                  <IoIosClose
                    style={{
                      position: "absolute",
                      width: "24px",
                      height: "24px",
                      left: "765px",
                      top: "26px",
                    }}
                  />
                </span>
              </div>
              <svg
                width="830"
                height="120"
                viewBox="0 0 830 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="830" y2="0.5" stroke="#E5E5E5" />
              </svg>
              <div className="row">
                <h2
                  className="modal-add-title"
                  style={{
                    position: "absolute",
                    height: "18px",
                    width: "120px",
                    left: "30px",
                    top: "108px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "18px",
                    /* identical to box height */

                    color: "#111111",
                  }}
                >
                  Nama List Item
                </h2>
                <input
                  style={{
                    position: "absolute",
                    height: "52px",
                    width: "759px",
                    left: "43px",
                    top: "135px",
                    border: "1px solid #16ABF8",
                    borderRadius: "6px",
                  }}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Tambahkan nama list item"
                />
              </div>
              <div className="row">
                <h2
                  data-sty="modal-add-priority-title  "
                  style={{
                    position: "absolute",
                    height: "18px",
                    width: "100px",
                    left: "30px",
                    top: "213px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "18px",
                    /* identical to box height */

                    color: "#111111",
                  }}
                >
                  Priority
                </h2>
                <Dropdown>
                  <Dropdown.Toggle variant="flat" id="dropdown-basic">
                    <Dropdown.Item
                      href="#/action-1"
                      variant="two"
                    ></Dropdown.Item>
                    Pilih Priority
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="super-colors">
                    <Dropdown.Item href="#/action-1" variant="two">
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <svg
                width="830"
                height="120"
                viewBox="0 0 830 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="830" y2="0.5" stroke="#E5E5E5" />
              </svg>
              <div className="row">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-sty="modal-add-save-button"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "13px 14px",
                    gap: "6px",

                    position: "absolute",
                    width: "150px",
                    height: "54px",
                    left: "640px",
                    top: "330px",

                    background: "#16ABF8",
                    borderRadius: "45px",
                  }}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
