import React, { useState } from "react";
import './menu-style.css'

const Menu = ({ items, setReasonModalOpen, setModalOpen, setDataForModal }) => {
  const [done, setDone] = useState([])
  return (
    <div className="section-center">
      {items.map((item) => {
        if (done.includes(item.id)) {
          return null;
        }
        const { id, title, img, desc } = item;
        return (
          <article style={{marginLeft:'-5rem', cursor:"revert"}} key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div style={{width:'30rem'}} className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{item.category}</h4>
              </header>
              <p className="item-text">{desc}</p>
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
