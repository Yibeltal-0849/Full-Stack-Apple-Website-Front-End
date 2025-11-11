import React from "react";
import HeaderLink from "./components/Header/HeaderLink/HeaderLink";
import SharedHeaderAndFooter from "./components/SharedHeaderAndFooter";
export default function App() {
  return (
    <>
      <HeaderLink />
      { <SharedHeaderAndFooter /> }
    </>
  );
}
