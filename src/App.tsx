import React from "react";
import "./App.css";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { SerachBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";

export const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HomePage />*/}
      <SerachBooksPage />
      <Footer />
    </div>
  );
};
