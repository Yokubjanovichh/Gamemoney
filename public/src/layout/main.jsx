import React, { memo } from "react";
import "./layout.css";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { Activity } from "../components/activity/activity";
import { Footer } from "../components/footer/footer";
import { Payment } from "../components/payment/payment";

export const LayoutMain = memo(() => {
  return (
    <div className="layout_main">
      <div className="layout_main_header">
        <Header />
      </div>
      <div className="layout_main_content">
        <div className="layout_main_content__container">
          <Outlet />
          <Payment />
        </div>
        <div className="layout_main_content__activity">
          <Activity />
        </div>
      </div>
      <div className="layout_main_footer">
        <Footer />
      </div>
    </div>
  );
});
