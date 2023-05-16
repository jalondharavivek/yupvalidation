import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import "../../../assets/style/view.css";
const Viewtransaction = (index) => {
  const navigate = useNavigate();
  const viewdata = useLocation(index);
  console.log(viewdata);
  console.log(viewdata.state.receipt, "Sfsfsfsf");
  const backtransactionpage = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="mainclassaddtransaction">
        <div>
          <span className="tradetailsview">Transaction Details </span>
        </div>
        <div className="viewmain">
          <table className="vvv">
            <tr>
              <td> Id:{viewdata.state.id}</td>
            </tr>
            <tr>
              <td>
                <label>
                  Transaction Date :- {viewdata.state.transactiondate}{" "}
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label>Month Year :- {viewdata.state.monthyear} </label>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>
                  transactiontype :- {viewdata.state.transactiontype}{" "}
                </label>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>From Account :- {viewdata.state.fromaccount} </label>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>To Acccount :- {viewdata.state.toaccount} </label>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>Receipt :- </label>
                <img src={viewdata.state.receipt} alt="" className="IMGWIDTH"></img>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>Notes :- {viewdata.state.notes} </label>
              </td>
            </tr>
          </table>
          <p className="addtransactionback" onClick={backtransactionpage}>
            Back
          </p>
        </div>
      </div>
    </div>
  );
};
export default Viewtransaction;
