import React, { useState } from "react";
import Menu from "./AllMenu";
import AllCampaignsModal from "./AllCampaignsModal";
import Categories from "../../Components/CampaignRequest/Categories";
import items from "../../Components/CampaignRequest/data";


const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const AllCampaigns = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({})
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
      {modalOpen && <AllCampaignsModal setOpenModal={setModalOpen} dataForModal={dataForModal}/>}
      <div className="myProduct-body">
        <main>
          <section className="section">
            <div className="title">
              {/* <img src={logo} alt="logo" className="logo" /> */}
              <h2 style={{ fontSize: "3rem" }}>Dashboard</h2>
              <div className="underline"></div>
            </div>
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              filterItems={filterItems}
            />
            <Menu items={menuItems} setModalOpen={setModalOpen} setDataForModal={setDataForModal}/>
          </section>
        </main>
      </div>
    </>
  );
};

export default AllCampaigns;