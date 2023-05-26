import React, { useState, useEffect } from "react";

import Financetrackerform from "./Transactiongrid";
// import "../../../assets/style/Finance.css                                                                                                                                                                                     ";

import { useNavigate } from "react-router-dom";
import { Formdata } from "../../../Context/context-transaction";
import { useContext } from "react";
import {
  selectgroupby
  } from "../../../utills/constants";
const Mainfinance = () => {
  const { datastate, setDatastate } = useContext(Formdata);
  const [grp, setGrp] = useState(false);
  const [grpval, setGrpval] = useState();
  const [alltransaction, setAlltransaction] = useState([]);
  const [groupby, setGroupby] = useState([]);
  

  const navigate = useNavigate();
  useEffect(() => {
    setAlltransaction(datastate);
  }, []);

  const logout = () => {
    localStorage.removeItem("loggin");
    navigate("login");
  };
  const addtransaction = () => {
    navigate("addtransaction");
  };

  const groupBy = (array, key) => {
    let groupbydata = array.reduce((grpres, curvaluegrp) => {
      (grpres[curvaluegrp[key]] = grpres[curvaluegrp[key]] || []).push(
        curvaluegrp
      );
      return grpres;
    }, []);
    return groupbydata;
  };

  function group(event) {
    setGrpval(event.target.value)
    const grouptype = event.target.value;
    console.log(grouptype, "value");
  }
  useEffect(() => {
    if(grpval){
    if (grpval === "none" || grpval === "") {
      setGrp(false);
    } else {
      const valgrpdata = groupBy(alltransaction, grpval);
      console.log(valgrpdata, "vivekdelet1logup");

      setGroupby(valgrpdata);
      setGrp(true);
      setGrpval(grpval)
    }
}
    
  }, [grpval,alltransaction ]);


  function deleterecord(delet_id) {
    console.log(delet_id,"delet_id");
    let deletedata = [...datastate];

   let filterdata = deletedata.filter(item => item.id !== delet_id)

   setDatastate(filterdata)
   

}




useEffect(() => {
  console.log(datastate,"dataaaaa");
  setAlltransaction(datastate);
 
}, [datastate]);
  return (
    <div>
      <div className="financetrackerheading">
        <span className="headingfinancetracker">Finance Tracker</span>
      </div>
      <div className="grpby">
        <div className="addlogoutbuttonclass">
          <div>
            <p className="addtransaction" onClick={() => logout()}>
              logout
            </p>
          </div>
          <div>
            <p className="addtransaction" onClick={addtransaction}>
              ADD +
            </p>
          </div>
        </div>
        <div className="grpby">
          <span>Group By : </span>

          <select
            name="toaccount"
            defaultValue="default"
            className="searchspan"
            onChange={group}
          >
         
            {selectgroupby.map((key) => (
              <option key={key.label} value={key.value}>
                {key.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="addtransactionmaindiv">
        {grp ? (
          <div>
            {Object.values(groupby).map((element, index) => (
              <div key={index}>
                <h1>{Object.keys(groupby)[index]}</h1>
                <Financetrackerform all={element} deleterecord={deleterecord} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <Financetrackerform all={alltransaction}  deleterecord={deleterecord}/>
          </div>
        )}
      </div>
    </div>
  );
};
export default Mainfinance;
