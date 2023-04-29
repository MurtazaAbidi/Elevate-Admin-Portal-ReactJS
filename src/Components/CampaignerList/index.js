import React, { useState } from "react";
import CampaignerModal from "./CampaignerModal";


const CampaignerList = ({campaigners}) => {
  const[campaignerModalOpen, setCampaignerModalOpen] = useState(false);
  const[dataForCampaigner, setDataforCampaigner] = useState({});
  return (
    <>
      {campaignerModalOpen && <CampaignerModal setCampaignerModalOpen={setCampaignerModalOpen} dataForCampaigner={dataForCampaigner}/>}
    <div style={{ position:"absolute", height:'100vh',width:'100vw', top:0, left:0, zIndex:-1}}>
      <div
        style={{ fontSize: "2rem", textAlign: "center", paddingBottom: "1rem" }}
      ><span style={{ fontWeight: 700, textTransform: "capitalize" }}>
          Campaigner's List
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
            <th>Campaigner Name</th>
            <th>Campaigner Email</th>
            <th>Phone Number</th>
            <th>CNIC</th>

          </tr>

          {campaigners.map((element, index) => {
            return (
              <tr onClick={()=>{setCampaignerModalOpen(true); setDataforCampaigner(element)}}>
                <td>{index + 1}</td>
                <td>{element.campaigner_name}</td>
                <td>{element.campaigner_email}</td>
                <td>{element.campaigner_contact}</td>
                <td>{element.campaigner_cnic}</td>
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

export default CampaignerList;
