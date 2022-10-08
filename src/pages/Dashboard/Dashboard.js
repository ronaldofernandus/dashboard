import React from "react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="container">
          <h1 className="activity-title">Activity</h1>
          <button
            type="button"
            className=" btn btn-primary activity-add-button"
          >
            <AiOutlinePlus />
            Tambah
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div
                className="card"
                style={{
                  height: "234px",
                  width: "235px",
                  left: "auto",
                  right: "auto",
                  top: "150px",
                  boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div className="card-body">
                  <h4
                    data-cy="activity-item-title"
                    style={{
                      height: "54px",
                      width: "182px",
                      left: "auto",
                      top: "auto",
                      position: "absolute",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "18px",
                      lineHeight: "27px",
                    }}
                  >
                    Activity
                  </h4>
                </div>
                <div className="footer">
                  <span
                    data-cy="activity-item-date"
                    style={{
                      height: "21px",
                      width: "auto",
                      left: "auto",
                      top: "165px",
                      position: "absolute",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "18px",
                      lineHeight: "27px",
                    }}
                  >
                    08 Oktober 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
