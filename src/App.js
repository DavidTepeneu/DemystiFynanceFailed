import "./App.css";
import React from "react";
import logo from "./assets/demystifynanceLogo.png";
import xmark from "./assets/xIcon.png";
import textSizeIcon from "./assets/textSizeIcon.png";

function App() {
  const options = [
    { label: "English", value: "English" },

    { label: "Español", value: "Spanish" },

    { label: "中文", value: "Mandarin Chinese" },

    { label: "日本語", value: "Japanese" },
    { label: "Romanian", value: "Romanian" },
    { label: "Vietnamese", value: "Vietnamese" },
    { label: "한국어", value: "Korean" },
  ];

  const [value, setValue] = React.useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="settings">
      <img className="logo" src={logo}></img>
      <img className="xmark" src={xmark}></img>
      <div className="line"></div>
      <div></div>
      <h2>Settings</h2>
      <br></br>
      <h5>Translate to:</h5>

      <div>
        <select name="languageselect" className="dropdown">
          <option value="English">English</option>
          <option value="Espanol">Español</option>
          <option value="Espanol">中文</option>
          <option value="Espanol">日本語</option>
          <option value="Espanol">Romanian</option>
          <option value="Espanol">Vietnamese</option>
        </select>
      </div>

      <br></br>
      <div className="line" style={{ paddingTop: "0px" }}></div>
      <h5>
        <br></br>
        <br></br>Text Size:
      </h5>

      <div className="textSizeOptions" align="bottom">
        <img className="textSize3" align="left" src={textSizeIcon}></img>
        <img className="textSize2" align="left" src={textSizeIcon}></img>
        <img className="textSize1" align="left" src={textSizeIcon}></img>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="line"></div>

      <h5 style={{ paddingTop: "0px" }}>
        <br></br>
        <br></br>Color settings:
      </h5>

      <div>
        <select name="languageselect" className="dropdown">
          <option value="English">Default</option>
          <option value="Espanol">Protanopia</option>
          <option value="Espanol">Tritanopia</option>
          <option value="Espanol">Deuteranopia</option>
        </select>
      </div>
    </div>
  );
}

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}

      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default App;
