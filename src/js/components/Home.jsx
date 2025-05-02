import React, { useState, useEffect } from "react";

const Home = () => {
  const [selectedColor, setSelectedColor] = useState("red"); // Start with red
  const [showPurple, setShowPurple] = useState(false); // Extra light control

  // Auto-cycle lights every 2 seconds
  useEffect(() => {
    const cycle = setInterval(() => {
      setSelectedColor(prev => {
        if (prev === "red") return "yellow";
        if (prev === "yellow") return "green";
        if (prev === "green" && showPurple) return "purple"; // If purple enabled
        return "red";
      });
    }, 2000);

    return () => clearInterval(cycle); // Clear interval when component unmounts
  }, [showPurple]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="bg-dark p-4 rounded d-flex flex-column align-items-center gap-3">
        
        {/* Red Light */}
        <div
          onClick={() => setSelectedColor("red")}
          className={`rounded-circle border border-dark`}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: selectedColor === "red" ? "red" : "red",
            cursor: "pointer",
            boxShadow: selectedColor === "red" ? "0 0 40px red" : "none",
          }}
        ></div>

        {/* Yellow Light */}
        <div
          onClick={() => setSelectedColor("yellow")}
          className={`rounded-circle border border-dark`}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: selectedColor === "yellow" ? "yellow" : "yellow",
            cursor: "pointer",
            boxShadow: selectedColor === "yellow" ? "0 0 40px yellow" : "none",
          }}
        ></div>

        {/* Green Light */}
        <div
          onClick={() => setSelectedColor("green")}
          className={`rounded-circle border border-dark`}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: selectedColor === "green" ? "green" : "green",
            cursor: "pointer",
            boxShadow: selectedColor === "green" ? "0 0 40px green" : "none",
          }}
        ></div>

        {/* Purple Light (optional) */}
        {showPurple && (
          <div
            onClick={() => setSelectedColor("purple")}
            className={`rounded-circle border border-dark`}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: selectedColor === "purple" ? "purple" : "purple",
              cursor: "pointer",
              boxShadow: selectedColor === "purple" ? "0 0 40px purple" : "none",
            }}
          ></div>
        )}
      </div>

      {/* Button to add/remove Purple Light */}
      <button
        onClick={() => setShowPurple(!showPurple)}
        className="btn btn-primary mt-4"
      >
        {showPurple ? "Remove Purple Light" : "Add Purple Light"}
      </button>
    </div>
  );
};

export default Home;
