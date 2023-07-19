import React from "react";
import { Routes, Route } from "react-router-dom";
import InfoPage from "../Pages/InfoPage";
import LandingPage from "../Pages/LandingPage";
import PropertyListing from "../Pages/PropertyListing";

export default function Layout() {
  return (
    <>
      {/* Routes Defined also with component to load up */}
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/siteinformation" element={<InfoPage/>}></Route>
        <Route path="/products/:productId" element={<PropertyListing/>}></Route>
      </Routes>
    </>
  );
}