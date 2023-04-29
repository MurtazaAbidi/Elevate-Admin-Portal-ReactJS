import React, { useState } from "react";
import InvestorModal from "./InvestorModal";
import "./investors-styling.css";

const InvestorsList = ({investors}) => {
  const[investorModalOpen, setInvestorModalOpen] = useState(false);
  const[dataForInvestor, setDataforInvestor] = useState({});
  return (
    <>
      {investorModalOpen && <InvestorModal setInvestorModalOpen={setInvestorModalOpen} dataForInvestor={dataForInvestor}/>}
    <div style={{ position:"absolute", height:'100vh',width:'100vw', top:0, left:0, zIndex:-1}}>
      <div
        style={{ fontSize: "2rem", textAlign: "center", paddingBottom: "1rem" }}
      ><span style={{ fontWeight: 700, textTransform: "capitalize" }}>
          Investor's List
        </span>
      </div>
      <div
        style={{
          overflowY: "scroll",
          height:'90vh'
        }}
      >
        {/* <div style={{height:'5rem'}}> */}

        <table style={{ margin: "auto", background:'rgb(230 230 230 / 80%)' }}>
          <tr id="header">
            <th>#</th>
            <th>Investor Name</th>
            <th>Investor Email</th>
            <th>Phone Number</th>
            <th>CNIC</th>

          </tr>

          {investors.map((element, index) => {
            return (
              <tr onClick={()=>{setInvestorModalOpen(true); setDataforInvestor(element)}}>
                <td>{index + 1}</td>
                <td>{element.investor_name}</td>
                <td>{element.investor_email}</td>
                <td>{element.investor_contact}</td>
                <td>{element.investor_cnic}</td>
              </tr>
            );
          })}
        </table>
      </div>
      {/* </div> */}
    </div>
    </>
  );
};

export default InvestorsList;
