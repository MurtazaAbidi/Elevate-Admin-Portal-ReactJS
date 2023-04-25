import React from 'react'
import './ReasonModalStyles.css'

const ReasonModal = ({rejectionReasonData, setReasonModalOpen, setRejectionReasonData}) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        setReasonModalOpen(false);
        setRejectionReasonData([...rejectionReasonData, e.target.rejectionReason.value])
    }
  return (
    <div className='reasonModal-container'>
        <div className='reasonModal-innerContainer'>
            <h1>Rejection Reason</h1>
            <form onSubmit={handleSubmit}>
            <div className='reasonModal-textAreaStyling'>
            <textarea  id='rejectionReason' name='rejectionReason' cols="30" rows="10" placeholder='Enter the Rejection Reason' required></textarea>
            {/* <RxCrossCircled onClick={()=>{setReasonModalOpen(false)}}/> */}
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ReasonModal