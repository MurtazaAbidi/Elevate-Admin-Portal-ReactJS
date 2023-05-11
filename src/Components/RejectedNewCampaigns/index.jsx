import React, { useEffect, useState } from 'react'
import Modal from '../CampaignDetails';
import RejectedNewCampaignModal from './RejectedNewCampaignModal';

const RejectedNewCampaigns = ({ campaignsData }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [dataForModal, setDataForModal] = useState({});
    return (
      <>
        {/* {campaignerModalOpen && <CampaignerModal setCampaignerModalOpen={setCampaignerModalOpen} dataForCampaigner={dataForCampaigner}/>} */}
        {modalOpen && <RejectedNewCampaignModal setOpenModal={setModalOpen} dataForModal={dataForModal} setDataForModal={setDataForModal}/>}
        <div style={{ position: "absolute", height: '100vh', width: '100vw', top: 0, left: 0, zIndex: -1 }}>
          <div
            style={{ fontSize: "2rem", textAlign: "center", paddingBottom: "1rem" }}
          ><span style={{ fontWeight: 700, textTransform: "capitalize" }}>
              Rejected New Campaigns Requests
            </span>
          </div>
          <div
            style={{
              overflowY: "scroll",
              height: '90vh'
            }}
          >
            {/* <div style={{height:'5rem'}}> */}
  
            <table style={{ margin: "auto", background: 'rgb(230 230 230 / 80%)' }}>
              <tr id="header">
                <th>#</th>
                <th>Campaign Title</th>
                <th>Rejected Message</th>
                <th>Campaign Type</th>
                <th>Campaigner Name</th>
              </tr>
  
              {campaignsData.map((element, index) => {
                return (
                  <tr onClick={() => { setModalOpen(true); setDataForModal(element) }}>
                    <td>{index + 1}</td>
                    <td>{element.campaign_title}</td>
                    <td>{element.rejected_message}</td>
                    <td>{element.campaign_type}</td>
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

export default RejectedNewCampaigns