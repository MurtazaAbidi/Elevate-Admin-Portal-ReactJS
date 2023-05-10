import React from 'react'
import './ReasonModalStyles.css'
import axios from 'axios';

const ReasonModalTime = ({ done, setDone, selectedItemReject, rejectionReasonData, setReasonModalOpen, setRejectionReasonData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let send_data_to_api = {
      id: selectedItemReject,
      rejectedMessage: e.target.rejectionReason.value
    }
    axios.post(`${process.env.REACT_APP_API_URL}/api/admin/rejecttimeextendrequest`,
      send_data_to_api,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true
      }
    ).then(function (response) {
      if (response.status === 200) {
        console.log(response.data)
        setDone([...done, selectedItemReject])
        setReasonModalOpen(false);
        setRejectionReasonData([...rejectionReasonData, e.target.rejectionReason.value])
        alert (response.data)
      }
    })
      .catch(function (error) {
        console.log(error.response.data);
        alert(error.response.data.msg)
      });
  }
  return (
    <div className='reasonModal-container'>
      <div className='reasonModal-innerContainer'>
        <div className='rejectedReason-topHeader'><h1>Rejection Reason</h1><button onClick={() => { setReasonModalOpen(false) }}>X</button></div>
        <form onSubmit={handleSubmit}>
          <div className='reasonModal-textAreaStyling'>
            <textarea id='rejectionReason' name='rejectionReason' cols="30" rows="10" placeholder='Enter the Rejection Reason' required></textarea>
            {/* <RxCrossCircled onClick={()=>{setReasonModalOpen(false)}}/> */}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ReasonModalTime