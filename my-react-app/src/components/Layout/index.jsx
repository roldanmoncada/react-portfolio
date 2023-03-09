import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import Header from "../Header/Header";
import React, {useState} from "react";


export default function Layout() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Contact />;
    }

    return <About />;
  };
  
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
