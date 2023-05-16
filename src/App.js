import logo from "./logo.svg";
import "./App.css";
import { Main } from "./Context/context-transaction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transactionadd from "./pages/Transaction/Components/Addtransaction";
import Mainfinance from "./pages/Transaction/Components/MainTransaction";
import Viewtransaction from "./pages/Transaction/Components/viewtra";
import Edittransaction from "./pages/Transaction/Components/edit";
function App() {
  return (
    <div>
      <Main>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/register" element={<Register />} /> */}

            {/* <Route path="/" element={<Authenticationlogin />}> */}
            <Route path="/" element={<Mainfinance />} />
            {/* </Route>  */}

            <Route path="/addtransaction" element={<Transactionadd />}></Route>
            <Route   path="/transaction/view/:index" element={<Viewtransaction />}></Route>
            <Route   path="/transaction/edit/:index" element={<Edittransaction />}></Route>

            {/* <Route path="/alltransaction" element={<Alltransaction />} >
          <Route path=":id" element={<Alltransaction />} />  */}
            {/* </Route>
          <Route path="/View" element={<View />} />
        </Route> */}
          </Routes>
        </BrowserRouter>
      </Main>
    </div>
  );
}

export default App;
