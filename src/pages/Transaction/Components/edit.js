import Transactionadd from "./Addtransaction";
import { useEffect } from "react";
import { Formdata } from "../../../Context/context-transaction";
import { useContext } from "react";
 import { useLocation, useNavigate } from "react-router-dom";
const Edittransaction = (index) => {
    const { datastate, setDatastate } = useContext(Formdata);

    const navigate = useNavigate();
      const editdata = useLocation(index);
      console.log(editdata.state,"121");
      const id = editdata.state
      var editdata1 = datastate
      console.log(editdata1,"00000");
      var editdatavalue = editdata1[id-1]
      console.log(editdata1);
           
  
  
  return(
  
  
    <Transactionadd  all={editdatavalue} />
    
  )
  
  } 
   export default Edittransaction;