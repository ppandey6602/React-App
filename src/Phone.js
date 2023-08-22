import React, { useState } from "react";

const Phone = ({ buttonStyles, targetElement, handleButtonClick }) => {
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipWidth, setTooltipWidth] = useState("181px");
  const [arrowWidth, setArrowWidth] = useState("5px");
  const [arrowHeight, setArrowHeight] = useState("5px");

  const handleButtonHover = () => {
    setTooltipVisible(true);
  };

  const handleButtonLeave = () => {
    setTooltipVisible(false);
  };

  const boxStyle = {
    position: "absolute",
    width: "280px",
    height: "590px",
    top: "40px",
    left: "1000px",
    borderRadius: "40px",
    background: "#00000040",
    boxShadow:
      "-1.6781489849090576px 0px 4.027557849884033px -2.517223834991455px #212121 inset, 0px -0.8390744924545288px 3.3562979698181152px 0px #212121 inset",
    border: "15px solid black",
  };

  const buttonContainerStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
  };

  const buttonTextStyles = {
    fontFamily: "Montserrat",
    fontSize: "15px",
    fontWeight: 510,
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "left",
  };

  const hugButtonStyle = {
    width: "73px",
    height: "34px",
    padding: "8px",
    borderRadius: "4px",
    gap: "10px",
    background: "#FFFFFF",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "left",
  };

  const centerButtonStyle = {
    width: "76px", // Updated width for Button 3
    height: "34px", // Updated height for Button 3
    padding: "8px",
    borderRadius: "10px",
    gap: "10px",
    background: "#FFFFFF",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "left",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    ...buttonStyles.button3,
  };

  const topLeftButtonStyle = {
    ...hugButtonStyle,
    position: "absolute",
    top: "10px",
    left: "10px",
    ...buttonStyles.button1,
  };

  const topRightButtonStyle = {
    ...hugButtonStyle,
    position: "absolute",
    top: "10px",
    right: "10px",
    ...buttonStyles.button2,
  };

  const bottomLeftButtonStyle = {
    ...hugButtonStyle,
    position: "absolute",
    bottom: "10px",
    left: "10px",
    ...buttonStyles.button4,
  };

  const bottomRightButtonStyle = {
    ...hugButtonStyle,
    position: "absolute",
    bottom: "10px",
    right: "10px",
    ...buttonStyles.button5,
  };

  const notchStyle = {
    position: "absolute",
    width: "0",
    height: "0",
    bottom: "100%", // Place the arrow at the bottom of the tooltip
    left: "50%",
    transform: "translateX(-50%)",
    borderBottom: `${arrowHeight} solid #000000`, // Use borderBottom for the arrow pointing upwards
    borderLeft: `${arrowWidth} solid transparent`,
    borderRight: `${arrowWidth} solid transparent`,
  };
  
  
  const tooltipContainerStyle = {
    position: "relative",
    marginTop: "10px", // Adjust the margin to create space between the tooltip and button
  };
  
  const tooltipStyle = {
    width: tooltipWidth,
    padding: "0px 0px 0px 14px",
    borderRadius: "3.5px",
    background: "#212121",
    color: "#ffffff",
    fontFamily: "Montserrat",
    textAlign: "center",
    display: tooltipVisible ? "block" : "none",
    border: "0.42px solid #212121",
    position: "absolute",
    top: "100%", // Attach the tooltip to the bottom of the button
    left: "50%",
    transform: "translateX(-50%)",
  };
  

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div style={boxStyle}>
          <div style={buttonContainerStyle}>
            <button
              id="button1"
              style={topLeftButtonStyle}
              onClick={handleButtonClick}
              onMouseEnter={() => {
                setTooltipText(buttonStyles.button1["data-tooltip"]);
                handleButtonHover();
              }}
              onMouseLeave={handleButtonLeave}
            >
              <span style={buttonTextStyles}>Button 1</span>
              {targetElement === "button1" && (
                <div style={tooltipContainerStyle}>
                  <div style={{ ...tooltipStyle }}>
                    <div style={notchStyle}></div> {/* Move the notch to the bottom */}
                    {tooltipText}
                  </div>
                </div>
              )}
            </button>
            <button
              id="button2"
              style={topRightButtonStyle}
              onClick={handleButtonClick}
              onMouseEnter={() => {
                setTooltipText(buttonStyles.button2["data-tooltip"]);
                handleButtonHover();
              }}
              onMouseLeave={handleButtonLeave}
            >
              <span style={buttonTextStyles}>Button 2</span>
              {targetElement === "button2" && (
                <div style={tooltipContainerStyle}>
                  <div style={{ ...tooltipStyle }}>
                    <div style={notchStyle}></div> {/* Move the notch to the bottom */}
                    {tooltipText}
                  </div>
                </div>
              )}
            </button>
            <button
              id="button3"
              style={centerButtonStyle}
              onClick={handleButtonClick}
              onMouseEnter={() => {
                setTooltipText(buttonStyles.button3["data-tooltip"]);
                handleButtonHover();
              }}
              onMouseLeave={handleButtonLeave}
            >
              <span style={buttonTextStyles}>Button 3</span>
              {targetElement === "button3" && (
                <div style={tooltipContainerStyle}>
                  <div style={{ ...tooltipStyle }}>
                    <div style={notchStyle}></div> {/* Move the notch to the bottom */}
                    {tooltipText}
                  </div>
                </div>
              )}
            </button>
            <button
              id="button5"
              style={bottomRightButtonStyle}
              onClick={handleButtonClick}
              onMouseEnter={() => {
                setTooltipText(buttonStyles.button5["data-tooltip"]);
                handleButtonHover();
              }}
              onMouseLeave={handleButtonLeave}
            >
              <span style={buttonTextStyles}>Button 5</span>
              {targetElement === "button5" && (
                <div style={tooltipContainerStyle}>
                  <div style={{ ...tooltipStyle }}>
                    <div style={notchStyle}></div> {/* Move the notch to the bottom */}
                    {tooltipText}
                  </div>
                </div>
              )}
            </button>
            <button
              id="button4"
              style={bottomLeftButtonStyle}
              onClick={handleButtonClick}
              onMouseEnter={() => {
                setTooltipText(buttonStyles.button4["data-tooltip"]);
                handleButtonHover();
              }}
              onMouseLeave={handleButtonLeave}
            >
              <span style={buttonTextStyles}>Button 4</span>
              {targetElement === "button4" && (
                <div style={tooltipContainerStyle}>
                  <div style={{ ...tooltipStyle }}>
                    <div style={notchStyle}></div> {/* Move the notch to the bottom */}
                    {tooltipText}
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
