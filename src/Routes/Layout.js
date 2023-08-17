import React from "react";
import { Routes, Route } from "react-router-dom";
import InfoPage from "../Pages/InfoPage";
import LandingPage from "../Pages/LandingPage";
import Listings from "../Pages/Listings";
import PropertyListing from "../Pages/PropertyListing";
import ContactUs from "../Pages/ContactUs";
import "../CSS/gallery.css";

export default function Layout() {
  return (
    <>
      {/* Routes Defined also with component to load up */}
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/siteinformation" element={<InfoPage/>}></Route>
        <Route path="/products/:productId" element={<PropertyListing/>}></Route>
        <Route path="/listings" element= {<Listings/>}></Route>
        <Route path="/contact" element= {<ContactUs/>}></Route>
      </Routes>
    </>
  );
}