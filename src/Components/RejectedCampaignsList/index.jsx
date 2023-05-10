import React, { useState } from "react";
import CampaignRejectModal from "./CampaignRejectModal";
// import CampaignerModal from "./CampaignerModal";


const RejectedTimeRequestsList = ({ campaignsData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({});
  return (
    <>
      {/* {campaignerModalOpen && <CampaignerModal setCampaignerModalOpen={setCampaignerModalOpen} dataForCampaigner={dataForCampaigner}/>} */}
      {modalOpen && <CampaignRejectModal setOpenModal={setModalOpen} dataForModal={dataForModal} setDataForModal={setDataForModal}/>}
      <div style={{ position: "absolute", height: '100vh', width: '100vw', top: 0, left: 0, zIndex: -1 }}>
        <div
          style={{ fontSize: "2rem", textAlign: "center", paddingBottom: "1rem" }}
        ><span style={{ fontWeight: 700, textTransform: "capitalize" }}>
            Rejected Time Extend Requests
          </span>
        </div>
        <div
          style={{
            overflowY: "scroll",
            height: '90vh'
          }}
        >
          {/* <div style={{height:'5rem'}}> */}

          <table style={{ margin: "auto", background: 'rgb(230 230 230 / 80%)', width:'1000px' }}>
            <tr id="header">
              <th>#</th>
              <th>Campaign Name</th>
              <th>Rejected Reason</th>
              <th>Campaigner Name</th>
            </tr>

            {campaignsData.map((element, index) => {
              return (
                <tr onClick={() => { setModalOpen(true); setDataForModal(element) }}>
                  <td>{index + 1}</td>
                  <td>{element.campaign_name}</td>
                  <td>{element.rejected_reason}</td>
                  <td>{element.campaigner_name}</td>
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

export default RejectedTimeRequestsList;
