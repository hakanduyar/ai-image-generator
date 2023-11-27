import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/default_image.svg";

const ImageGenerator = () => {

const[image_url, setImage_url] = useState("/");
let inputRef = useRef(null);

constimageGenerator = async =>{
  
}

  return (
    <div className="ai-image-generator">
      <div className="header">
        Ai Image <span>Generator</span>
      </div>
      <div className="image-loading">
        <div className="image">
          <img src={default_image} alt="" />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Describe What You Want To See"
        />
        <div className="generate-btn">Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
