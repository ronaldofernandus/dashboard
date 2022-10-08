import React from "react";
import "./Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Item = () => {
  return (
    <>
      <div className="container">
        <svg
          style={{
            width: "32",
            height: "32",
            left: "200",
            top: "10000",
          }}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.6665 16L14.6665 24"
            stroke="#111111"
            stroke-width="5"
            stroke-linecap="square"
          />
          <path
            d="M6.6665 16L14.6665 8"
            stroke="#111111"
            stroke-width="5"
            stroke-linecap="square"
          />
        </svg>

        <h1 className="todo-title"> New Activity</h1>
        <svg
          width="18"
          height="18"
          positition="absolute"
          left="40px"
          top="40px"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 16.9998H5L15.5 6.49981C16.0304 5.96938 16.3284 5.24996 16.3284 4.49981C16.3284 3.74967 16.0304 3.03025 15.5 2.49981C14.9696 1.96938 14.2501 1.67139 13.5 1.67139C12.7499 1.67139 12.0304 1.96938 11.5 2.49981L1 12.9998V16.9998Z"
            stroke="#A4A4A4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

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
                    <span>
                      <label
                        class="todo-item-title"
                        style={{
                          height: "27px",
                          width: "auto",
                          
                          top: "282px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: " 500",
                          fontSize: "18px",
                          lineHeight: "27px",
                          /* identical to box height */

                          color: "#111111",
                        }}
                        for="flexCheckDefault"
                      >
                        Default checkbox
                      </label>
                    </span>
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
    </>
  );
};

export default Item;
