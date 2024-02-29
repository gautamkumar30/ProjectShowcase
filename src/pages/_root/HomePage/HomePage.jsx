import { Link } from "react-router-dom";
import React, { useContext } from "react";

import "./homepage.scss";
import ProjectCard from "../../../components/ProjectCard";
import DashboardCard from "../../../components/DashboardCard";
import { AuthContext } from "../../../context/AuthContext";
const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  // var x = localStorage.getItem("newTitle");
  // var y = localStorage.getItem("newDesc");
  // console.log(x);
  // console.log(y);
  const storedData = JSON.parse(localStorage.getItem("data")) || [];

  return (
    <main className="HomePage">
      <div className="wrapper">
        <section className="header">
          <div>
            {/* <h1>Welcome, {currentUser.displayName}</h1> */}
            <h1>Welcome, Gautam Kumar G</h1>
            <h2>S.A. Engineering College</h2>
          </div>
          <div>
            <Link to="/upload" className="link">
              Create New Project
            </Link>
            <Link to="/search" className="link">
              Search
            </Link>
          </div>
        </section>
        <section className="dashboard">
          <DashboardCard value="4" title1="Projects Created" title2="Created" />
          <DashboardCard value="1" title1="Ongoing Project" title2="Created" />
        </section>
        <section className="yourProjects">
          <h2>Your projects</h2>
          <div className="projectCardList">
            <ProjectCard
              title="E-Commerce Application"
              desc="Developed using ReactJS, Tailwind CSS. Created and integrated backend using Firebase"
            />
            <ProjectCard
              title="Social Media Application"
              desc="Developed using AngularJS, Tailwind CSS. Created and integrated backend using Appwrite"
            />
            <ProjectCard
              title="Student Management"
              desc="Developed using ReactJS, Bootstrap. Created and integrated backend using MongoDB"
            />
            <ProjectCard
              title="Attendance Tracker"
              desc="Developed using ReactJS, Tailwind CSS. Created and integrated backend using Firebase"
            />

            {storedData.map((data, index) => (
              <ProjectCard
                key={index}
                title={data.newTitle}
                desc={data.newDesc}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
