import React, { useState } from "react";
import Categories from "../../Components/CampaignRequest/Categories";
import items from "../../Components/CampaignRequest/TimeExtendData";
import ReasonModal from "../../Components/ReasonModal";
import ExtendTimeMenu from "./ExtendTimeMenu";
import ExtendTimeModal from "./ExtendTimeModal";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const CampaignTimeExtendRequest = () => {
  const [reasonModalOpen, setReasonModalOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({});
  const [rejectionReasonData, setRejectionReasonData] = useState([]);
  const categories = allCategories;

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
      {modalOpen && (
        <ExtendTimeModal setOpenModal={setModalOpen} dataForModal={dataForModal} />
      )}
      <div className="myProduct-body">
        <main>
          <section className="section">
            <div className="title">
              {/* <img src={logo} alt="logo" className="logo" /> */}
              <h2 style={{ fontSize: "3rem" }}>Time Extension Request</h2>
              <div className="underline"></div>
            </div>
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              filterItems={filterItems}
            />
            <ExtendTimeMenu
              items={menuItems}
              setModalOpen={setModalOpen}
              setDataForModal={setDataForModal}
              setReasonModalOpen={setReasonModalOpen}
            />
          </section>
        </main>
      </div>
    </>
  );
};

export default CampaignTimeExtendRequest;
