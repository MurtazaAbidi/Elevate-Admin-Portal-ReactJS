import React, { useEffect, useState } from "react";
import InvestorsList from "../../Components/CampaignDetails/InvestorsList";
import '../Profile/profile.css';
import axios from "axios";
import { useSnackBar } from "../../Hooks/useSnakeBar";

const InvestorProfilesList = () => {
  const [loading, setLoading] = useState(false);
  const [investors, setInvestors] = useState([]);
  const showPopUp = useSnackBar();
  useEffect(() => {
    setLoading(true);
    axios.get(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/admin/investorlist`,
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
        setInvestors(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        showPopUp(error.response.data.msg, "error");
        setLoading(false);
      });
  }, [])
  return <div>
    {loading ?
      <div style={{ height: '100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      :
      <InvestorsList investors={investors} />}
  </div>
};

export default InvestorProfilesList;
