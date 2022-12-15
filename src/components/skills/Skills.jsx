import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Skills({ skills }) {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsloggedIn(true);
    }, 2000);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsloggedIn(true)}>Login</button>
      )}
    </>
  );
}

export default Skills;
