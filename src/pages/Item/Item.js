import React from "react";
import "./Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";

const Item = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <MdOutlineKeyboardArrowLeft
              style={{
                position: "absolute",
                bottom: "500px",
                left: "18%",
                top: "14.5%",
                right: "54.17%",
              }}
              size="50px"
              color="black"
            />
          </div>
          <div className="col-4">
            <h1 className="todo-title"> New Activity</h1>
          </div>
          <div className="col-4">
            <HiOutlinePencil
              style={{
                position: "absolute",
                bottom: "500px",
                left: "32%",
                top: "15.75%",
                right: "54.17%",
              }}
              size="20px"
              color="black"
            />
          </div>
        </div>

        <button type="button" className=" btn btn-primary tambah">
          <AiOutlinePlus />
          Tambah
        </button>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="card"
                style={{
                  height: "100px",
                  width: "auto",
                  left: "auto",
                  top: "150px",
                  boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <div class="form-check todo-item-checkbox">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <span>
                          <BsDot
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "auto",
                              left: "30px",
                            }}
                            size="35px"
                            color="red"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col-3">
                      <label
                        class="todo-item-title"
                        style={{
                          height: "27px",
                          width: "200px",
                          left: "215px",
                          top: "282px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: " 500",
                          fontSize: "18px",
                          lineHeight: "27px",
                          textAlign: "left",
                          /* identical to box height */

                          color: "#111111",
                        }}
                        for="flexCheckDefault"
                      >
                        Default checkbox
                      </label>
                      <span>
                        <BsTrash
                          style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                          }}
                          size="40px"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
