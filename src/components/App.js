import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "../routes/Home";
import Find from "../routes/Find";
import Report from "../routes/Report";
import Database from "../routes/Database";
import Safety from "../routes/Safety";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          {/* <Nav /> */}
          <Routes>
            {/* Handles the logging in of users */}
            <Route path="/" element={<Home />} />
            {/* Handles the logging in of users */}
            <Route path="find" element={<Find />} />
            <Route path="report" element={<Report />} />
            <Route path="database" element={<Database />} />
            <Route path="safety" element={<Safety />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
