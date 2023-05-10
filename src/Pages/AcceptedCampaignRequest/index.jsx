import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ApprovedCampaigns from '../../Components/ApprovedCampaigns';

const AcceptedCampaignRequest = () => {
  const [loading, setLoading] = useState(false);
  const [campaignsData, setCampaignsData] = useState([]);
  useEffect(() => {
    // setLoading(true);
    axios.get(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/campaigner/showcampaigns`,
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
        setCampaignsData(response.data)
        // setItems(response.data)
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        alert(error.response.data.msg);
        setLoading(false);
      });
  }, [])
    // axios.get(
    //   // body: JSON.stringify({
    //   `${process.env.REACT_APP_API_URL}/api/admin/campaignerlist`,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     withCredentials: true,
    //   }
    // )
    //   .then(function (response) {
    //     console.log(response.data);
    //     setCampaigners(response.data);
    //     setLoading(false);
    //   })
    //   .catch(function (error) {
    //     console.log(error.response.data.msg);
    //     alert(error.response.data.msg);
    //     setLoading(false);
    //   });
  // }, [])
  // let demodata = [
  //   { campaign_name: "campaign1", campaign_likes: "5", campaign_progress: "45%", campaigner_name: "campaigner1", rejected_reason: "rejected1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 " },
  //   { campaign_name: "campaign2", campaign_likes: "5", campaign_progress: "45%", rejected_reason: "rejected2", campaigner_name: "campaigner2" },
  //   { campaign_name: "campaign3", campaign_likes: "5", campaign_progress: "45%", rejected_reason: "rejected3", campaigner_name: "campaigner3" },
  //   { campaign_name: "campaign4", campaign_likes: "5", campaign_progress: "45%", rejected_reason: "rejected4", campaigner_name: "campaigner4" },
  //   { campaign_name: "campaign5", campaign_likes: "5", campaign_progress: "45%", rejected_reason: "rejected5", campaigner_name: "campaigner5" },
  //   { campaign_name: "campaign6", campaign_likes: "5", campaign_progress: "45%", rejected_reason: "rejected6", campaigner_name: "campaigner6" },
  //   { campaign_name: "campaign7", campaign_likes: "5", campaign_progress: "45%", rejected_reason: "rejected7", campaigner_name: "campaigner7" },
  // ]
  return (
    <div>
      {loading ?
        <div style={{ height: '100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        :
        <ApprovedCampaigns campaignsData={campaignsData} />
      }
    </div>
  )
}

export default AcceptedCampaignRequest
