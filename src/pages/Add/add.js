import React from "react";
import "./Add.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosClose } from "react-icons/io";
import { BsDot } from "react-icons/bs";
const Add = () => {
  return (
    <>
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
                <div className="col-4">
                  <div class="card-body">
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
                </div>

                <svg
                  width="830"
                  height="50"
                  viewBox="0 0 830 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="830" y2="0.5" stroke="#E5E5E5" />
                </svg>

                <div className="col-4">
                  <div className="card-body">
                    <h2
                      className="modal-add-title"
                      style={{
                        position: "absolute",
                        height: "18px",
                        width: "94px",
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
                    <div class="mb-3">
                      <input
                        style={{
                          position: "absolute",
                          height: "52px",
                          width: "759px",
                          left: "30px",
                          top: "135px",
                          background: "#FFFFFF",
                          borderRadius: "6px",
                        }}
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Tambahkan nama list item"
                      />
                    </div>
                  </div>
                </div>
                <svg
                  width="830"
                  height="50"
                  viewBox="0 0 830 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="830" y2="0.5" stroke="#E5E5E5" />
                </svg>

                <div className="col-4">
                  <h2
                    className="modal-add-priority-title"
                    style={{
                      position: "absolute",
                      height: "18px",
                      width: "54px",
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
                  <div class="dropdown">
                    <button
                      style={{
                        boxSizing: "border-box",
                        position: "absolute",
                        height: "52px",
                        width: "205px",
                        left: "20px",
                        top: "60px",
                        background: " #FFFFFF",
                        border: "1px solid #E5E5E5",
                        borderRadius: "6px",
                      }}
                      class="btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>
                        <BsDot
                          style={{
                            position: "absolute",
                            left: "3px",
                            top: "5px",
                          }}
                          size="50px"
                          color="red"
                        />
                      </span>
                      <h3
                        className="modal-add-priority-title"
                        style={{
                          position: "absolute",
                          height: "24px",
                          width: "77px",
                          left: "auto",
                          top: "15px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "24px",
                          textAlign: "center",
                          /* identical to box height */

                          color: "#111111",
                        }}
                      >
                        Very High
                      </h3>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <svg
                  width="830"
                  height="1"
                  viewBox="0 0 830 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="830" y2="0.5" stroke="#E5E5E5" />
                </svg>

                <div className="col-4">
                  <button
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "13px 14px",
                      gap: "6px",

                      position: "absolute",
                      width: "150px",
                      height: " 54px",
                      left: "640px",
                      top: "330px",

                      background: "#16ABF8",
                      borderRadius: "45px",
                    }}
                    type="button"
                    class="btn btn-primary"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
