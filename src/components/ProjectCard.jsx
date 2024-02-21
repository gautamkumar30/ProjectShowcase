import "./projectcard.scss";
import { CalendarFold } from "lucide-react";

// const data = [
//   {
//     id: 1,
//     title: "E-Commerce Application",
//     desc: "Developed using ReactJS, Tailwind CSS. Created and integrated backend using Firebase",
//   },
//   {
//     id: 2,
//     title: "Social Media Application",
//     desc: "Developed using AngularJS, Tailwind CSS. Created and integrated backend using Appwrite",
//   },
//   {
//     id: 3,
//     title: "Student Management",
//     desc: "Developed using ReactJS, Bootstrap. Created and integrated backend using MongoDB",
//   },
//   {
//     id: 4,
//     title: "Attendance Tracker",
//     desc: "Developed using ReactJS, Tailwind CSS. Created and integrated backend using Firebase",
//   },
// ];

const ProjectCard = ({ title, desc }) => {
  return (
    <main className="ProjectCard">
      {/* <h3>{title}</h3> */}
      <h3>{title}</h3>
      <div className="projectUploadedTime">
        <CalendarFold className="calendarFold" />
        <h6>Uploaded on - 21/02/2024</h6>
      </div>
      <p>{desc}</p>
      {/* <p>desc</p> */}
      <div className="projectViewButtons">
        <a href="https://www.google.com/">View Demo</a>
        <a href="https://github.com/gautamkumar30/ProjectShowcase">
          View in GitHub
        </a>
      </div>
    </main>
  );
};

export default ProjectCard;
