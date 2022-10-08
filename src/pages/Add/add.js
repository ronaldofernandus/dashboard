import React from "react";
import "./Add.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Add = () => {
  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      position: "absolute",
                      height: "27px",
                      width: "170px",
                      left: "30px",
                      top: "24px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: " 600",
                      fontSize: "18px",
                      lineHeight: "27px",

                      color: "#111111",
                    }}
                  >
                    Tambah List Item
                  </h5>
                </div>

                <ul class="list-group list-group-flush">
                  <div class="card-body">
                    <h5
                      class="modal-add-name-title"
                      style={{
                        position: "absolute",
                        height: "18px",
                        width: "94px",
                        left: "30px",
                        top: "108px",
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: " 600",
                        fontSize: "12px",
                        lineHeight: "18px",

                        color: "#111111",
                      }}
                    >
                      Nama List Item
                    </h5>
                    <div class="form-group">
                      <input
                        style={{
                          position: "absolute",
                          height: "52px",
                          width: "759px",
                          left: "28px",
                          top: "135px",
                          background: "#FFFFFF",
                          border: "1px solid #16ABF8",
                          borderRadius: "6px",
                        }}
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Tambahkan Nama List Item"
                      />
                    </div>
                  </div>
                </ul>
                <ul class="list-group list-group-flush">
                  <div class="card-body">
                    <h5
                      class="modal-add-priority-title"
                      style={{
                        position: "absolute",
                        width: "54px",
                        height: "18px",
                        left: "30px",
                        top: "213px",

                        fontFamily: "Poppins",
                        fontStyle: " normal",
                        fontWeight: "600",
                        fontSize: "12px",
                        lineHeight: "18px",
                        /* identical to box height */

                        color: "#111111",
                      }}
                    >
                      Priority
                    </h5>
                    <div
                      class="dropdown"
                      style={{
                        boxSizing: " border-box",

                        position: "absolute",
                        width: " 205px",
                        height: "52px",
                        left: "30px",
                        top: "240px",

                        background: "#FFFFFF",
                        border: "1px solid #E5E5E5",
                        borderRadius: "6px",
                      }}
                    >
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        style={{
                          boxSizing: " border-box",

                          position: "absolute",
                          width: " 77px",
                          height: "24px",
                          left: "80px",
                          top: "254px",

                          fontFamily: "Poppins",
                          fontStyle: " normal",
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown button
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
