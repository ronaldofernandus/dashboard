import React, { useState, useEffect } from "react";
import "./Add.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosClose } from "react-icons/io";

import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { BsDot } from "react-icons/bs";
import { getListAllItem } from "../../Axios/ItemAxios";
const Add = () => {
  const data = [
    {
      value: 1,
      text: "Merah",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="7" fill="#ED4C5C" />
        </svg>
      ),
    },
    {
      value: 2,
      text: "kuning",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="7" fill="#F8A541" />
        </svg>
      ),
    },
    {
      value: 3,
      text: "Hijau",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="7" fill="#00A790" />
        </svg>
      ),
    },
    {
      value: 4,
      text: "Biru",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>
      ),
    },
    {
      value: 5,
      text: "Ungu",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="7" fill="#8942C1" />
        </svg>
      ),
    },
  ];
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

                <select
                  data-sty="Rectangle 606"
                  style={{
                    position: "absolute",
                    width: "205px",
                    height: "52px",
                    left: "45px",
                    top: "240px",

                    background: "#F4F4F4",
                    border: "1px solid #E5E5E5",
                    borderRadius: "6px 6px 0px 0px",
                  }}
                >
                  <option
                    options={data}
                    style={{
                      position: "absolute",
                      width: "205px",
                      height: "52px",
                      left: "30px",
                      top: "292px",

                      background: "#F4F4F4",
                      border: "1px solid #E5E5E5",
                    }}
                    getOptionLabel={(e) => (
                      <div
                        style={{
                          position: "absolute",
                          width: " 14px",
                          height: "14px",
                          left: "47px",
                          top: "311px",
                        }}
                      >
                        {e.icon}
                      </div>
                    )}
                  >
                    Very High
                  </option>
                  <option
                    style={{
                      position: "absolute",
                      width: "205px",
                      height: "52px",
                      left: "30px",
                      top: "292px",

                      background: "#F4F4F4",
                      border: "1px solid #E5E5E5",
                    }}
                  >
                    High
                  </option>
                  <option
                    style={{
                      position: "absolute",
                      width: "205px",
                      height: "52px",
                      left: "30px",
                      top: "292px",

                      background: "#F4F4F4",
                      border: "1px solid #E5E5E5",
                    }}
                  >
                    Medium
                  </option>
                  <option
                    style={{
                      position: "absolute",
                      width: "205px",
                      height: "52px",
                      left: "30px",
                      top: "292px",

                      background: "#F4F4F4",
                      border: "1px solid #E5E5E5",
                    }}
                  >
                    Low
                  </option>
                </select>
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
