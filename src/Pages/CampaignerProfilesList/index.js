import React, { useEffect, useState } from 'react'
import CampaignerList from '../../Components/CampaignerList'
import axios from 'axios';
import { useSnackBar } from '../../Hooks/useSnakeBar';

const CampaignerProfilesList = () => {
  const [loading, setLoading] = useState(false);
  const [campaigners, setCampaigners] = useState([]);
  const showPopUp = useSnackBar();
  useEffect(() => {
    setLoading(true);
    axios.get(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/admin/campaignerlist`,
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
        setCampaigners(response.data);
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
        <CampaignerList campaigners={campaigners}/>}
    </div>
  )
}

export default CampaignerProfilesList
