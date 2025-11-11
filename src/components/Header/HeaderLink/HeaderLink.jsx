import React from "react";
import Iphone from "./Iphone";
import Music from "./Music";

import Tv from "./Tv";
import Watch from "./Watch";
import Mac from "./Mac";
import Ipad from "./Ipad";
import Support from "./Support";
import { Routes, Route } from "react-router-dom";
import Body_section from "../../body_section/Body_section";
import Four404 from "./Four404";
import SharedHeaderAndFooter from "../../SharedHeaderAndFooter";
import Header from "../Header";
import Footer from "../../Footer/Footer";
import Search from "./Search";
import Cart from "./Cart";
import ProductPage from "./ProductPage";
import SingleProduct from "./SingleProduct";
function HeaderLink() {
  return (
    <Routes>
      <Route path="/" element={<SharedHeaderAndFooter />}>
        <Route path="/" element={<Body_section />} />
        <Route path="/Mac" element={<Mac />} />
        <Route path="/Ipad" element={<Ipad />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Tv" element={<Tv />} />
        <Route path="/Watch" element={<Watch />} />
        <Route path="/iPhone" element={<Iphone />} />
        {/* <Route path="/iPhones/:ProductId" element={<ProductPage />} /> */}
        <Route path="/iPhones/:ProductId" element={<SingleProduct />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Cart" element={<Cart />} />
        {/* <Route path="*" element={<Four404 />} /> */}
      </Route>
    </Routes>
  );
}

export default HeaderLink;
