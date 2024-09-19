import React from "react";

export default function Form() {
  return (
    <div className="container">
      <div>
        <h1>Form Component</h1>
        <input placeholder="enter the value" />
        <button>deposit</button>
        <button>withdrawl</button>
      </div>

      <div>
        <input placeholder="enter the name" />
        <button>update</button>
      </div>

      <div>
        <input placeholder="enter the mobilel" />

        <button>update</button>
      </div>
    </div>
  );
}
