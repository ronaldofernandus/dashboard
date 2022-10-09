import React, { useState, useEffect } from "react";
import "./Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlinePlus } from "react-icons/ai";

import { BsTrash } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDetailDashboardById } from "../../Axios/dashboardAxios";
import { getListAllItem } from "../../Axios/ItemAxios";
const Item = () => {
  const { getListItemResult, getListItemLoading, getListItemError } =
    useSelector((state) => state.itemReducers);
  const { getDetailDashboardResult } = useSelector(
    (state) => state.dashboardReducers
  );

  useEffect(() => {
    dispatch(getDetailDashboardById(id));
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getListAllItem());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getListAllItem(+id));
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3" data-cy="todo-back-button">
            <MdOutlineKeyboardArrowLeft
              style={{
                position: "absolute",
                width: "32px",
                height: "32px",
                bottom: "500px",
                left: "209px",
                top: "159px",
              }}
              size="50px"
              color="black"
            />
          </div>
          <div className="col-3">
            <h1
              className="todo-title"
              style={{
                position: "absolute",
                height: "54px",
                width: "430px",
                left: "245px",
                top: "148px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "36px",
                lineHeight: "54px",
                /* identical to box height */

                color: "#111111",
              }}
            >
              {" "}
              {getDetailDashboardResult
                ? getDetailDashboardResult.title
                : "tipe kosong"}
            </h1>
          </div>
          <div className="col-3">
            <Link
              to={`/add`}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "13px 21px 13px 14px",
                gap: "6px",
                position: "absolute",
                width: "159px",
                height: "54px",
                left: "1061px",
                top: "154px",
                background: "#16ABF8",
                borderRadius: "45px",

                /* identical to box height */

                color: "#111111",
              }}
              type="button"
              class="btn btn-primary"
              data-cy="activity-add-button"
            >
              <AiOutlinePlus
                style={{
                  position: "absolute",
                  width: "24px",
                  height: "24px",
                  flex: "none",
                  left: "10px",
                  top: "12px",
                  order: "0",
                  color: "#FFFFFF",
                  flexGrow: "0",
                }}
              />
              <h5
                data-cy="Tambah"
                style={{
                  position: "absolute",
                  width: "78px",
                  height: "27px",
                  left: "40px",
                  top: "12px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "27px",
                  /* identical to box height */
                  textAlign: "center",
                  color: "#FFFFFF",
                  flex: "none",
                  order: "1",
                  flexGrow: "0",
                }}
              >
                {" "}
                Tambah
              </h5>
            </Link>
          </div>
          <div className="col-3" data-cy="todo-title-edit-button">
            <HiOutlinePencil
              style={{
                position: "absolute",
                width: "24px",
                height: "24px",

                left: "690px",
                top: "164px",
              }}
              size="20px"
              color="black"
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            {getListItemResult ? (
              getListItemResult.data.map((item) => {
                console.log(getListItemResult);
                // console.log(getListJobsResult);
                return (
                  <>
                    {" "}
                    <div
                      class="card"
                      style={{
                        height: "80px",
                        width: "1000px",
                        left: "100px",
                        top: "200px",
                      }}
                    >
                      <div className="row">
                        <div className="col-3">
                          <input
                            style={{
                              boxSizing: "border-box",
                              position: "absolute",
                              height: "20px",
                              width: "20px",
                              left: "24px",
                              top: "25px",
                              background: "#FFFFFF",
                              border: "1px solid #C7C7C7",
                            }}
                            class="form-check-input mt-0"
                            type="checkbox"
                            value=""
                            aria-label="Checkbox for following text input"
                          />
                        </div>
                        <div className="col-3">
                          <BsDot
                            data-cy="todo-item-priority-indicator"
                            style={{
                              position: "absolute",
                              height: "9px",
                              width: "9px",
                              left: "60px",
                              top: "29px",
                              background: "#ED4C5C",
                            }}
                          />
                        </div>
                        <div className="col-3">
                          <h1
                            className="todo-title"
                            style={{
                              position: "absolute",
                              width: "110px",
                              height: "27px",
                              left: "85px",
                              top: "23px",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "18px",
                              lineHeight: "27px",
                              /* identical to box height */

                              color: "#111111",
                            }}
                          >
                            {" "}
                            {item.title}
                          </h1>
                        </div>
                        <div className="col-3" data-cy="todo-item-edit-button">
                          <HiOutlinePencil
                            style={{
                              position: "absolute",
                              width: "20px",
                              height: "20px",

                              left: "200px",
                              top: "28px",
                            }}
                            size="20px"
                            color="black"
                          />
                        </div>
                        <div
                          className="col-3"
                          data-cy="todo-item-delete-button"
                        >
                          <BsTrash
                            style={{
                              position: "absolute",
                              width: "24px",
                              height: "24px",

                              left: "970px",
                              top: "30px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : getListItemLoading ? (
              <p>Loading...</p>
            ) : (
              <p>{getListItemError ? getListItemError : "Data Kosong"}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
