import React from "react";
import ReactDOM from "react-dom";


export default function PlayerForm() {
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const form = new FormData(event.target);
      const formData = Object.fromEntries(form.entries());
  
      const res = await fetch('/api/cars', {
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
  
      const result = await res.json();
      console.log(result)
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="Name" type="text"  />
  
        <button type="submit">Create Player</button>
      </form>
    );
  }