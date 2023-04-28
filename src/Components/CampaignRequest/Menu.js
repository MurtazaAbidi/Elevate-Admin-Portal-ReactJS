import React, { useState } from "react";
import './menu-style.css'

const Menu = ({ items, setReasonModalOpen, setModalOpen, setDataForModal, loading }) => {
  const [done, setDone] = useState([])
  return (
    <div className="section-center">
      {
        loading ?
        <div style={{ height: '100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          :
          items.map((item) => {
        if (done.includes(item.id)) {
          return null;
        }
        const { campaign_id, campaign_title,campaigner_name, campaign_type, campaign_image, campaign_description, progress, days_left, likes } = item;
        return (
          <article style={{marginLeft:'-5rem', cursor:"revert"}} key={campaign_id} className="menu-item">
            <img src={campaign_image} alt={campaign_title} className="photo" />
            <div style={{width:'30rem'}} className="item-info">
              <header>
              <h4>{campaign_title}<span style={{color:'#a6a6a6'}}>{" (by: "+campaigner_name+")"}</span></h4>
                <h4 className="price">{campaign_type}</h4>
              </header>
              <p className="item-text">{campaign_description}</p>
              {/* <div style={{textAlign:'right', margin:'5px', }}><span style={{ padding:'5px 23px',borderRadius:30, color:'#4267B2', fontWeight:700}}>Likes: {like}</span></div> */}
              {/* <ProgressBar progress={progress} height={25} /> */}
              <button onClick={()=>{setDone([...done, item.id]); }} className="inside-menu-button" style={{border:'2px solid #04F004', background:'rgb(4,240,4,0.07)'}} >Accept</button>
              <button onClick={()=>{setDone([...done, item.id]); setReasonModalOpen(true)}} className="inside-menu-button" style={{border:'2px solid #FF0000', background:'rgba(255, 0, 0, .04)'}}>Reject</button>
              <button onClick={()=>{setModalOpen(true);setDataForModal(item); console.log(item)}} style={{border:'1px solid',textDecoration:'underline', cursor:'pointer',padding:'0 1rem', height:'2rem', margin:'1rem',boxShadow:'grey 9px 7px 4px 0px', borderRadius:'5px', background:'transparent'}}>Click to see Details</button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
