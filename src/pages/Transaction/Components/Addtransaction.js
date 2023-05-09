import React from "react";
import { useForm } from "react-hook-form";
import {
  monthYearOptions,
  transactionTypeOptions,
  accountOptions,
} from "../../../utills/constants";
import { useState } from "react";
import * as yup from "yup";
import { object, string, number, date, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "../../../assets/style/addtransaction.css";
const today = new Date();

let userSchema = yup.object().shape({
  transactiondate: yup
    .date()
    .typeError("Transaction Date is Required")
    .max(today, "Enter Valid Transaction Date"),
  monthyear: yup.string().required("Month Year is Required"),
  transactiontype: yup.string().required("Transaction Type is Required"),
  fromaccount: yup.string().required("From Account  is Required"),
  toaccount: yup.string().required("To Account  is Required"),
  amount: yup.string().required("Amount  is Required"),
  notes: yup
    .string("notwes should be a string")
    .trim()
    .required("Notes is a required field")
    .min(2, "Notes Min 2 character"),
  // createdOn: date().default(() => new Date()),
});

const Transactionadd = () => {
  const [addtransaction, setAddtransaction] = useState({
    transactiondate: "",
    monthyear: "",
    transactiontype: "",
    fromaccount: "",
    toaccount: "",
    amount: "",
    receipt: "",
    notes: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(userSchema) });


  
  const onSubmitHandler = (data) => {
    console.log({ data }, "form data");
    console.log(data.amount,"amount");
    setAddtransaction(data)
    console.log(addtransaction,"1212");
    var get = JSON.parse(localStorage.getItem("addtransaction") || "[]");
    var id = get.length + 1;
    addtransaction.id = id;
    get.push(addtransaction);

    // localStorage.setItem('Transaction', JSON.stringify(get));
    localStorage.setItem("addtransaction", JSON.stringify(get));
    reset();
  };
  return (
    <>
      <div>
        <div className="mainclassaddtransaction">
          <div>
            <span className="addtransactionheading">Add transaction</span>
          </div>
          <div className="formmain">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="transactiondateclass">
                <div className="divpadding">
                  <label className="transactiondatelabel">
                    Transaction Date :{" "}
                  </label>
                </div>
                <div>
                  <input
                    className="allinputbox"
                    type="date"
                    {...register("transactiondate", { required: true })}
                  ></input>

                  <div className="errordiv">
                    {errors.transactiondate && (
                      <p>{errors.transactiondate.message} </p>
                    )}
                  </div>
                </div>

                <div className="divpadding">
                  <label>Month Year :</label>
                </div>
                <div>
                  <select
                    className="allinputbox"
                    {...register("monthyear", { required: true })}
                  >
                    {monthYearOptions.map((data) => (
                      <option key={data.label} value={data.value}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                  <div className="errordiv">
                    {errors.monthyear && <p>{errors.monthyear.message} </p>}
                  </div>
                </div>
                <div className="divpadding">
                  <label>Transaction Type : </label>
                </div>
                <div>
                  <select
                    className="allinputbox"
                    {...register("transactiontype", { required: true })}
                  >
                    {transactionTypeOptions.map((data) => (
                      <option key={data.label} value={data.value}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                  <div className="errordiv">
                    {errors.transactiontype && (
                      <p>{errors.transactiontype.message} </p>
                    )}
                  </div>
                </div>
                <div className="divpadding">
                  <label>From Account :-</label>
                </div>
                <div>
                  <select
                    className="allinputbox"
                    {...register("fromaccount", { required: true })}
                  >
                    {accountOptions.map((data) => (
                      <option key={data.label} value={data.value}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                  <div className="errordiv">
                    {errors.fromaccount && <p>{errors.fromaccount.message} </p>}
                  </div>
                </div>
                <div className="divpadding">
                  <label>To Account :-</label>
                </div>
                <div>
                  <select
                    className="allinputbox"
                    {...register("toaccount", { required: true })}
                  >
                    {accountOptions.map((data) => (
                      <option key={data.label} value={data.value}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                  <div className="errordiv">
                    {errors.toaccount && <p>{errors.toaccount.message} </p>}
                  </div>
                </div>
                <div className="divpadding">
                  <label>Amount :-</label>
                </div>
                <div>
                  <input
                    placeholder="Amount"
                    className="allinputbox"
                    type="number"
                    {...register("amount", { required: true })}
                  ></input>
                  <div className="errordiv">
                    {errors.amount && <p>{errors.amount.message} </p>}
                  </div>
                </div>
                <div className="divpadding">
                  <label>Receipt :-</label>
                </div>
                <div>
                  <input
                    className="allinputbox"
                    type="file"
                    {...register("receipt", { required: true })}
                  ></input>
                  <div className="errordiv">
                    {errors.receipt && <p> Receipt is required*.</p>}
                  </div>
                </div>

                <div className="divpadding">
                  <label>Note :-</label>
                </div>
                <div>
                  <input
                    className="allinputbox"
                    type="text"
                    placeholder="Add Note"
                    {...register("notes")}
                  ></input>
                  <div className="errordiv">
                    {errors.notes && <p> {errors.notes.message} </p>}
                  </div>
                  {/* <div className="errordiv">
                     {errors.notes  ? ( <p> {errors.notes.message} </p>) :(<p></p>)
                     }                   
                       </div> */}
                </div>
                <div>
                  <input className="addtransactionback1" type="submit"></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Transactionadd;
