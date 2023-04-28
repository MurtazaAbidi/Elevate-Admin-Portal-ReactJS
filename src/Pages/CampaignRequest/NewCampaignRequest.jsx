import React, { useEffect, useState } from "react";
import Categories from "../../Components/CampaignRequest/Categories";
import Menu from "../../Components/CampaignRequest/Menu";
import items from "../../Components/CampaignRequest/dashboardData.js";
import "./style.css";
import Modal from "../../Components/CampaignDetails";
import ReasonModal from "../../Components/ReasonModal";
import axios from "axios";

const allCategories = ["all", "equity", "reward", "profit", "donation"];

const NewCampaignRequest = () => {
  const [items, setItems] = useState([])
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({})
  const [reasonModalOpen, setReasonModalOpen] = useState(false);
  const [rejectionReasonData, setRejectionReasonData] = useState([])
  const [loading, setLoading] = useState(false);


  const categories = allCategories;

  useEffect(() => {
    setLoading(true);
    axios.get(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/admin/campaignrequests`,
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
        setMenuItems(response.data)
        setItems(response.data)
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        alert(error.response.data.msg);
        setLoading(false);
      });
  }, [])

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.campaign_type === category);
    setMenuItems(newItems);
  };
  return (
    <>
      {reasonModalOpen && <ReasonModal rejectionReasonData={rejectionReasonData} setRejectionReasonData={setRejectionReasonData} setReasonModalOpen={setReasonModalOpen} />}
      {modalOpen && <Modal setOpenModal={setModalOpen} dataForModal={dataForModal} />}
      <div className="myProduct-body">
        <main>
          <section className="section">
            <div className="title">
              {/* <img src={logo} alt="logo" className="logo" /> */}
              <h2 style={{ fontSize: "3rem" }}>New Campaigns Request</h2>
              <div className="underline"></div>
            </div>
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              filterItems={filterItems}
            />
            <Menu items={menuItems} setReasonModalOpen={setReasonModalOpen} setModalOpen={setModalOpen} setDataForModal={setDataForModal} loading={loading}/>
          </section>
        </main>
      </div>
    </>
  );
};

export default NewCampaignRequest;