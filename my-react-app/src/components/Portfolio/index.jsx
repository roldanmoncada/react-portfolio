import React from "react";
import Project from '../Project'
import './style.css'

const projects = [
  {
    id: 0,
    title: "Easy USDA",
    description: "A MERN web app that allows you to find information on a searched food and save it to your profile.",
    repo: "https://github.com/roldanmoncada/easy-usda",
    site: "https://easy-usda.herokuapp.com/",
  },

  {
    id: 1,
    title: "PWA Text Editor",
    description:
      "As the title implies :)",
    repo: "https://github.com/roldanmoncada/pwa-text-editor",
    site: "https://pwa-text-editor-heroku.herokuapp.com/",
  },

  {
    id: 2,
    title: "Team Profile Generator",
    description:
      "An a web-blog-site where you can make an user and start an a blog",
    repo: "https://github.com/roldanmoncada/Team-Profile-Generator",
  },
  {
    id: 3,
    title: "Social Network API",
    description:
      "API that is queried using Insomnia and demonstrated in a video linked in the README.",
    repo: "https://github.com/roldanmoncada/social-network-api",
  },
  {
    id: 4,
    title: "Employee Tracker",
    description: "Command line app that uses mysql to store employees and manipulate them as specified.",
    repo: "https://github.com/roldanmoncada/employee-tracker-mysql",
  },
  {
    id: 5,
    title: "Ecomm Backend",
    description:
      "As the title implies :)",
    repo: "https://github.com/roldanmoncada/ecomm-backend",
  },
  {
    id: 6,
    title: "Twytter",
    description:
      "Social network where you can follow people, send twyts, delete them, and have a dashboard of all utilities.",
    repo: "https://github.com/roldanmoncada/twytter",
    site: "https://twytter-redo.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div div className="portfolio">
      <h2 className="center">Portfolio</h2>

      <div className="containerPortfolio">
        <Project projects={projects} />
      </div>
    </div>
  );
}

export default Portfolio;