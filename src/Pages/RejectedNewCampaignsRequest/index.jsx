import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RejectedNewCampaigns from '../../Components/RejectedNewCampaigns';

const RejectedNewCampaignsRequest = () => {
  const [loading, setLoading] = useState(false);
  const [rejectedCampaigns, setRejectedCampaignsCampaigns] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios.get(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/admin/rejectednewcampaignsrequest`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    )
      .then(function (response) {
        console.log(response.data);
        setRejectedCampaignsCampaigns(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        alert(error.response.data.msg);
        setLoading(false);
      });
  }, [])

  return (
    <div>
      {loading ?
        <div style={{ height: '100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        :
        <RejectedNewCampaigns campaignsData={rejectedCampaigns} />
      }
    </div>
  )
}

export default RejectedNewCampaignsRequest