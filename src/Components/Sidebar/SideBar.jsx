import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUserFriends } from "react-icons/fa";
import { GiSandsOfTime } from 'react-icons/gi';
import { MdPendingActions, MdOutlinePending } from "react-icons/md";
import { FiUsers } from 'react-icons/fi';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiLogOut } from "react-icons/bi";
import { BsClipboardCheck, BsClipboardX } from "react-icons/bs";
import SidebarMenu from "./SidebarMenu";
import "./sidebarstyle.css";
import axios from "axios";
import { useSnackBar } from "../../Hooks/useSnakeBar";
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/",
    name: "Accepted Request",
    icon: <BsClipboardCheck />,
    subRoutes: [
      {
        path: "/campaignaccepted",
        name: "Accepted Campaigns",
        icon: <MdOutlinePending />,
      },
      {
        path: "/campaigntimeaccepted",
        name: "Time Extend Accepted",
        icon: <GiSandsOfTime />,
      },
    ]
  },
  {
    path: "/",
    name: "Pending Request",
    icon: <MdPendingActions />,
    subRoutes: [
      {
        path: "/campaignrequest",
        name: "Campaigns Request",
        icon: <MdOutlinePending />,
      },
      {
        path: "/campaigntimerequest",
        name: "Time Extend Request",
        icon: <GiSandsOfTime />,
      },
    ]
  },
  {
    path: "/",
    name: "Rejected Request",
    icon: <BsClipboardX />,
    subRoutes: [
      {
        path: "/campaignrejected",
        name: "Rejected Campaigns",
        icon: <MdOutlinePending />,
      },
      {
        path: "/campaigntimerejected",
        name: "Time Extend Rejected",
        icon: <GiSandsOfTime />,
      },
    ]
  },
  {
    path: "/campaignerlist",
    name: "Campaigners List",
    icon: <FiUsers />,
  },
  {
    path: "/investorlist",
    name: "Investors List",
    icon: <FaUserFriends />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const showPopUp = useSnackBar();

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
          style={{ position: "fixed" }}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  ELEVATE
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          <div
            style={{ textAlign: "center", marginTop: "3rem", padding: "1rem" }}
          >
            {isOpen ? (
              <button
                className="sidebar-logout-btn"
                onClick={() => {
                  // window.location.reload(false);
                  axios.get(
                      `http://localhost:3300/api/admin/logout`,
                      {
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                        },
                        withCredentials: true,
                      }
                    )
                    .then(function (response) {
                      console.log(response);
                      if (response.status === 200) {
                        console.log(response);
                        window.location.reload(false);
                      }
                    })
                    .catch(function (error) {
                      console.log(error.response.data.msg);
                      showPopUp(error.response.data.msg, "error");

                    });
                }}
              >
                <span style={{ paddingRight: "1rem" }}>
                  <BiLogOut />
                </span>
                Logout
              </button>
            ) : null}
          </div>
        </motion.div>
        <main
          style={{
            width: "100%",
            paddingTop: "2rem",
            paddingBottom: "0.5rem",
            // minHeight: "33rem",
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default SideBar;
