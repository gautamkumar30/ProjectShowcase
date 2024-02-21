// import "./search.scss";

// const getDataFromAPI = async () => {
//   const projectsData = fetch("https://fakestoreapi.com/projects?sort=desc")
//     .then((res) => res.json())
//     .then((json) => console.log(json));

//   console.log(projectsData);

//   const projectsData1 = fetch("https://fakestoreapi.com/products/1")
//     .then((res) => res.json())
//     .then((json) => console.log(json));

//   console.log(projectsData1);
// };
// const storedData = JSON.parse(localStorage.getItem("data")) || [];

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const searched = true;
//   const inp = e.target[0].value;

//   // Check if the input title exists in storedData
//   const titleExists = storedData.some((data) => data.newTitle === inp);

//   if (titleExists) {
//     console.log("Success");
//   } else {
//     console.log("No match");
//   }
// };

// const Search = () => {
//   return (
//     <main className="Search">
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Eg. E-Commerce Application" />
//         <button type="submit">Search</button>
//       </form>
//       <ProjectCard
//         key={}
//         title={newTitle}
//         desc={newDesc}
//       />
//       {/* {searched && (PostCard title="E-Commerce Application" desc="Developed using ReactJS, Tailwind CSS. Created and integrated backend using Firebase")} */}
//     </main>
//   );
// };

// export default Search;

import { useState } from "react";
import ProjectCard from "../../../components/ProjectCard";
import "./search.scss";

const getDataFromAPI = async () => {
  try {
    const projectsData = await fetch(
      "https://fakestoreapi.com/projects?sort=desc"
    );
    const projectsJson = await projectsData.json();
    console.log(projectsJson);

    const singleProjectData = await fetch(
      "https://fakestoreapi.com/products/1"
    );
    const singleProjectJson = await singleProjectData.json();
    console.log(singleProjectJson);
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
};

const Search = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const storedData = JSON.parse(localStorage.getItem("data")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const inp = e.target[0].value;
    const titleExists = storedData.some((data) => data.newTitle === inp);

    if (titleExists) {
      console.log("Success");
      // You may want to set newTitle and newDesc based on the matching data
      const matchingData = storedData.find((data) => data.newTitle === inp);
      if (matchingData) {
        setNewTitle(matchingData.newTitle);
        setNewDesc(matchingData.newDesc);
      }
    } else {
      console.log("No match");
      // Reset newTitle and newDesc if no match is found
      setNewTitle("");
      setNewDesc("");
    }
  };

  return (
    <main className="Search">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Eg. E-Commerce Application" />
        <button type="submit">Search</button>
      </form>
      {newTitle && newDesc && (
        <ProjectCard key={newTitle} title={newTitle} desc={newDesc} />
      )}
    </main>
  );
};

export default Search;
