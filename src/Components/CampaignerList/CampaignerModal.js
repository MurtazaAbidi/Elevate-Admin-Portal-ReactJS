import React from "react";
import profilePic from "../../Assets/profilepic.png"

const CampaignerModal = ({setCampaignerModalOpen, dataForCampaigner}) => {

  return (
    <>
    <div
      style={{width: '100vw',
      height: '100vh',
      backdropFilter: 'blur(5px)',
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0, 
      fontFamily: "'Josefin Sans', sans-serif" }}
        >
        

      <div className="profile-wrapper" >
        <div className="left">
          
            <img
              style={{ height: 250, maxWidth: '17rem' }}
              src={dataForCampaigner.campaigner_image? dataForCampaigner.campaigner_image : profilePic}
              alt="ProfilePicture"
            />
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              marginTop: "1rem",
              marginBottom: "0.1rem",
            }}
          >
            {dataForCampaigner.campaigner_name}
          </div>
          <p>Campaigner</p>
        </div>
        <div className="right">
              <div className="titleCloseBtn" style={{height:0}}>
                    <button
                    style={{zIndex:10}}
                      onClick={() => {
                      setCampaignerModalOpen(false);
                      }}
                      >
                      X
                    </button>
                    </div>
          <div style={{ textAlign: "right", height: "1rem" }}>
          </div>
          <div className="info">
              <h3>Personal Information</h3>
              <div className="info_data">
                <div className="data">
                  <h4>Email</h4>
                  <p>{dataForCampaigner.campaigner_email}</p>
                </div>

                <div className="data">
                  <h4>Phone</h4>
                  <p>{dataForCampaigner.campaigner_contact}</p>
                </div>
              </div>
              <div className="info_data">
                <div className="data">
                  <h4>CNIC</h4>
                  <p>{dataForCampaigner.campaigner_cnic}</p>
                </div>
                {/* <div className="data">
                  <h4>cell</h4>
                  <p>0001-213-998761</p>
                </div> */}
              </div>
              <div className="info_data">
                <div className="data">
                  <h4>Office-Address</h4>
                  <p style={{ width: "25rem" }}>
                    {dataForCampaigner.office_address}
                  </p>
                </div>
              </div>
            </div>

          <div className="projects">
            <h3>Campaigns Details</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Total Campaigns</h4>
                <p>{dataForCampaigner.totalCampaigns} Campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
            </>
  );
};

export default CampaignerModal;
