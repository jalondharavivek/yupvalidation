import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  monthYearOptions,
  transactionTypeOptions,
  accountOptions,
  selectgroupby,
} from "../../../utills/constants";
import { Formdata } from "../../../Context/context-transaction";
import { useContext } from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "../../../assets/style/addtransaction.css";
import { useNavigate } from "react-router-dom";
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

const Transactionadd = (props) => {
  const navigate = useNavigate();

  // const navigate =  Navigate()
  // const [addtransaction, setAddtransaction] = useState([
  //   {
  //     transactiondate: "",
  //     monthyear: "",
  //     transactiontype: "",
  //     fromaccount: "",
  //     toaccount: "",
  //     amount: "",
  //     receipt: "",
  //     notes: "",
  //   },
  // ]);
  const { datastate, setDatastate } = useContext(Formdata);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(userSchema) });

  const onSubmitHandler = (data) => {
   
    
 

    if (props?.all?.id) {
      const newdata = {
        transactiondate: data.transactiondate.toLocaleDateString(),
        monthyear: data.monthyear,
        transactiontype: data.transactiontype,
        fromaccount: data.fromaccount,
        toaccount: data.toaccount,
        amount: data.amount,
        notes: data.notes,
      };
      var editdata1 = datastate;
  console.log(editdata1,"vvv");
  console.log(editdata1[props.all.id],"vvvv1");
      console.log(editdata1[props.all.id - 1], "10101010");

      const index = editdata1.findIndex((item) => item.id === props?.all?.id);

      editdata1[index] = { ...newdata, id: props?.all?.id };
      setDatastate(editdata1);
    } else {
      // var get = JSON.parse(localStorage.getItem("addtransaction") || "[]");
      // var id = get.length + 1;
      // data.id = id;
      // get.push(data);

      // localStorage.setItem("addtransaction", JSON.stringify(get));
      // // navigate("/");
      // reset();
      const newdata = {
        transactiondate: data.transactiondate.toLocaleDateString(),
        monthyear: data.monthyear,
        transactiontype: data.transactiontype,
        fromaccount: data.fromaccount,
        toaccount: data.toaccount,
        amount: data.amount,
        notes: data.notes,
      };
   
      // var get = JSON.parse(localStorage.getItem("addtransaction") || "[]");
      var id = datastate.length + 1;
      newdata.id = id;
      setDatastate([...datastate, newdata]);
      // addtransaction.push(addtransaction);
      console.log(datastate, "loggggg");
      // localStorage.setItem('Transaction', JSON.stringify(get));
      //  localStorage.setItem("addtransaction", JSON.stringify(get));
      // reset();
      navigate("/");
    }
  };
console.log(props?.all?.monthyear,"1010");
  console.log(datastate, "LLLLLLLLLLLLLL");

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
                    defaultValue={props?.all?.transactiondate}
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
                    defaultValue={props?.all?.monthyear}
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
                    defaultValue={props?.all?.transactiontype}
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
                    defaultValue={props?.all?.fromaccount}
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
                    defaultValue={props?.all?.toaccount}
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
                    defaultValue={props?.all?.amount}
                  ></input>
                  <div className="errordiv">
                    {errors.amount && <p>{errors.amount.message} </p>}
                  </div>
                </div>
                <div className="divpadding">
                  <label>Receipt :-</label>
                </div>
                <div>
                  {/* <input
                    className="allinputbox"
                    type="file"
                    {...register("receipt", { required: true })}
                  ></input> */}
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
                    defaultValue={props?.all?.notes}
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
