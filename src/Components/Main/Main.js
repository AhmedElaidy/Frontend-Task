import React from "react";
import { SketchOutlined } from "@ant-design/icons";
import "./Main.css";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
const Main = () => {
  return (
    <div className="main">
      <div className="top">
        <div className="head">
          Get Support
          <span>
            <SketchOutlined />
          </span>
        </div>
      </div>
      <div className="bottom">
        <Card price="100" color="#0A488F" headText='Customer Engagment' text='Get your own mobile app for industry specific'/>
        <Card price="100" color="#579064" headText='Actionable Insighets' text='Create Dashboards and Make edits withe them'/>
        <Card price="50" color="#950000" headText='Employees Productivity' text='KPI Builder , Work Conf,Create Oracle Requests'/>
        <Card price="100" color="#8F6C0A" headText='Operations Excellence' text='Tenant/lessee Managment and Security'/>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
