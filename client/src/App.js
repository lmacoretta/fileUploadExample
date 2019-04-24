import React from "react";
import "./App.css";

/** Componets */
import FileUpload from "./components/fileUploads";

function App() {
  return (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">
        <i className="fab fa-react" /> React file upload
      </h4>

      <FileUpload />
    </div>
  );
}

export default App;
