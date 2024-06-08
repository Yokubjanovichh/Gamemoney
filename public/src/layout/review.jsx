import React, { memo } from "react";
import "./layout.css";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

export const ReviewLayout = memo(() => {
  return (
    <div className="rewiews__layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
});
