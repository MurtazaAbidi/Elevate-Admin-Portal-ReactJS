import React, { useState } from "react";
import Categories from "../../Components/CampaignRequest/Categories";
import Menu from "../../Components/CampaignRequest/Menu";
import items from "../../Components/CampaignRequest/dashboardData.js";
import "./style.css";
import Modal from "../../Components/CampaignDetails";
import ReasonModal from "../../Components/ReasonModal";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const NewCampaignRequest = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({})
  const [reasonModalOpen, setReasonModalOpen] = useState(false);
  const [rejectionReasonData, setRejectionReasonData] = useState([])

  const categories = allCategories;

  // useEffect(()=>{
  //   console.log(rejectionReasonData)
  // },[rejectionReasonData])

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      {reasonModalOpen && <ReasonModal rejectionReasonData={rejectionReasonData} setRejectionReasonData={setRejectionReasonData} setReasonModalOpen={setReasonModalOpen} />}
      {modalOpen && <Modal setOpenModal={setModalOpen} dataForModal={dataForModal}/>}
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
            <Menu items={menuItems} setReasonModalOpen={setReasonModalOpen} setModalOpen={setModalOpen} setDataForModal={setDataForModal}/>
          </section>
        </main>
      </div>
    </>
  );
};

export default NewCampaignRequest;