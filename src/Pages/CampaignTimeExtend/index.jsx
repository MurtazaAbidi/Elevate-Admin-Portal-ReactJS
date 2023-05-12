import React, { useEffect, useState } from "react";
import Categories from "../../Components/CampaignRequest/Categories";
import ExtendTimeMenu from "./ExtendTimeMenu";
import ExtendTimeModal from "./ExtendTimeModal";
import axios from "axios";
import ReasonModalTime from "./ReasonModal";
import { useSnackBar } from "../../Hooks/useSnakeBar";

const allCategories = ["all", "equity", "reward", "profit", "donation"];

const CampaignTimeExtendRequest = () => {
  const [reasonModalOpen, setReasonModalOpen] = useState(false);
  const [items, setItems] = useState([])
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({});
  const [rejectionReasonData, setRejectionReasonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItemReject, setSelectedItemReject] = useState(null)
  const [done, setDone] = useState([])
  const categories = allCategories;
  const showPopUp = useSnackBar();

  useEffect(() => {
    setLoading(true);
    axios.get(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/admin/timeextensionrequests`,
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
        showPopUp(error.response.data.msg, "error");
        setLoading(false);
      });
  }, [done])

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
      {reasonModalOpen && <ReasonModalTime done={done} setDone={setDone} selectedItemReject={selectedItemReject} rejectionReasonData={rejectionReasonData} setRejectionReasonData={setRejectionReasonData} setReasonModalOpen={setReasonModalOpen} />}
      {modalOpen && (
        <ExtendTimeModal setOpenModal={setModalOpen} dataForModal={dataForModal} setDataForModal={setDataForModal} />
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
              done={done} 
              setDone={setDone} 
              setSelectedItemReject={setSelectedItemReject} 
              loading={loading}
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
