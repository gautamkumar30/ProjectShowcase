// import { useState, useContext } from "react";
// import { doc, Timestamp, updateDoc } from "firebase/firestore";
// import { db } from "../../../firebase";
// import { AuthContext } from "../../../context/AuthContext";
// import { v4 as uuid } from "uuid";

// import "./uploadProject.scss";
// import { useNavigate, Link } from "react-router-dom";

// const UploadProject = () => {
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(false);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [link, setLink] = useState("");
//   const [gitlink, setGitlink] = useState("");
//   const { currentUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     setLoading(true);
//   //     const title = e.target[0].value;
//   //     const description = e.target[1].value;
//   //     const link = e.target[2].value;
//   //     const gitlink = e.target[3].value;

//   //     setTitle("");
//   //     setDescription("");
//   //     setLink("");
//   //     setGitlink("");

//   //     const data = {
//   //       id: uuid(),
//   //       name: currentUser.displayName,
//   //       title,
//   //       description,
//   //       link,
//   //       gitlink,
//   //       date: Timestamp.now(),
//   //     };
//   //     await updateDoc(doc(db, "projects", currentUser.uid), {
//   //       data,
//   //     });
//   //   } catch {
//   //     setErr(true);
//   //   }
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/home");

//     try {
//       setLoading(true);
//       const title = e.target[0].value;
//       const description = e.target[1].value;
//       const link = e.target[2].value;
//       const gitlink = e.target[3].value;

//       setTitle("");
//       setDescription("");
//       setLink("");
//       setGitlink("");

//       localStorage.setItem("newTitle", title);
//       localStorage.setitem("newDesc", description);
//       localStorage.setitem("newDate", "21/02/2024");
//       localStorage.setitem("newLink", link);
//       localStorage.setitem("newGitLink", gitlink);
//     } catch {
//       setErr(true);
//     }
//   };

//   return (
//     <main className="UploadProject">
//       <div className="wrapper">
//         <h1>Create New Project</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="Hack-textfield">
//             <label>Project Title</label>
//             <input
//               type="text"
//               placeholder="Eg. Online Integrated Platform to host projects"
//             />
//           </div>
//           <div className="Hack-textfield ">
//             <label>Project Description</label>
//             <input
//               className="description"
//               type="text"
//               placeholder="Eg. Developed using ReactJS, Tailwind CSS. Created and integrated backend using Firebase"
//             />
//           </div>
//           <div className="Hack-textfield">
//             <label>Demo Link</label>
//             <input type="text" placeholder="Eg. https://www.google.com/" />
//           </div>
//           <div className="Hack-textfield">
//             <label>Git Link</label>
//             <input
//               type="text"
//               placeholder="Eg. https://www.github.com/gautamkumar30/"
//             />
//           </div>
//           <button type="submit">
//             <a href="/home">Submit</a>
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// };

// export default UploadProject;
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./uploadProject.scss";
import { AuthContext } from "../../../context/AuthContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
const UploadProject = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [gitlink, setGitlink] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const newTitle = e.target[0].value;
      const newDescription = e.target[1].value;
      const newLink = e.target[2].value;
      const newGitLink = e.target[3].value;

      setTitle("");
      setDescription("");
      setLink("");
      setGitlink("");
      // Corrected the typos in setItem
      // localStorage.setItem("newTitle", newTitle);
      // localStorage.setItem("newDesc", newDescription);
      // localStorage.setItem("newDate", "21/02/2024");
      // localStorage.setItem("newLink", newLink);
      // localStorage.setItem("newGitLink", newGitLink);
      // Retrieve existing data from localStorage
      const existingData = JSON.parse(localStorage.getItem("data")) || [];

      // Create a new entry with the updated information
      const newDataEntry = {
        newTitle: newTitle,
        newDesc: newDescription,
        newDate: "21/02/2024",
        newLink: newLink,
        newGitLink: newGitLink,
      };

      // Update the existing data or add the new entry
      const updatedData = [...existingData, newDataEntry];

      // Set the updated data back to localStorage
      localStorage.setItem("data", JSON.stringify(updatedData));

      navigate("/home");
    } catch {
      setErr(true);
    }
  };

  return (
    <main className="UploadProject">
      <div className="wrapper">
        <h1>Create New Project</h1>
        <form onSubmit={handleSubmit}>
          <div className="Hack-textfield">
            <label>Project Title</label>
            <input
              type="text"
              placeholder="Eg. Online Integrated Platform to host projects"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="Hack-textfield">
            <label>Project Description</label>
            <input
              className="description"
              type="text"
              placeholder="Eg. Developed using ReactJS, Tailwind CSS. Created and integrated backend using Firebase"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="Hack-textfield">
            <label>Demo Link</label>
            <input
              type="text"
              placeholder="Eg. https://www.google.com/"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="Hack-textfield">
            <label>Git Link</label>
            <input
              type="text"
              placeholder="Eg. https://www.github.com/gautamkumar30/"
              value={gitlink}
              onChange={(e) => setGitlink(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default UploadProject;
