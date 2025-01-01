import React from "react";

function Features({ title, description, image }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {image && <img src={image} alt={title} width="200" />}
    </div>
  );
}

export default Features;
