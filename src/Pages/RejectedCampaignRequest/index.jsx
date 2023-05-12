import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RejectedTimeRequestsList from '../../Components/RejectedCampaignsList';
import { useSnackBar } from '../../Hooks/useSnakeBar';

const RejectedCampaignRequest = () => {
  const [loading, setLoading] = useState(false);
  const [rejectedCampaigns, setRejectedCampaignsCampaigns] = useState([]);
  const showPopUp = useSnackBar();
  useEffect(() => {
    setLoading(true);
    axios.get(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/admin/showrejectedtimeextensionrequests`,
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
        showPopUp(error.response.data.msg, "error");
        setLoading(false);
      });
  }, [])

  return (
    <div>
      {loading ?
        <div style={{ height: '100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        :
        <RejectedTimeRequestsList campaignsData={rejectedCampaigns} />
      }
    </div>
  )
}

export default RejectedCampaignRequest
