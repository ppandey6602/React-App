import React, { useState, useEffect } from "react";
import Form from "./Form";
import Phone from "./Phone";

const App = () => {
  const [buttonStyles, setButtonStyles] = useState({
    button1: {
      fontFamily: "Barlow",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
      width: "73px",
      height: "34px",
      padding: "8px",
      borderRadius: "4px",
      gap: "10px",
      background: "#FFFFFF",
      color: "#000000",
      "data-tooltip": "Tooltip for Button 1",
    },
    button2: {
      fontFamily: "Barlow",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
      width: "73px",
      height: "34px",
      padding: "8px",
      borderRadius: "4px",
      gap: "10px",
      background: "#FFFFFF",
      color: "#000000",
      "data-tooltip": "Tooltip for Button 2",
    },
    button3: {
      fontFamily: "Barlow",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
      width: "73px",
      height: "34px",
      padding: "8px",
      borderRadius: "4px",
      gap: "10px",
      background: "#FFFFFF",
      color: "#000000",
      "data-tooltip": "Tooltip for Button 3",
    },
    button4: {
      fontFamily: "Barlow",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
      width: "73px",
      height: "34px",
      padding: "8px",
      borderRadius: "4px",
      gap: "10px",
      background: "#FFFFFF",
      color: "#000000",
      "data-tooltip": "Tooltip for Button 4",
    },
    button5: {
      fontFamily: "Barlow",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
      width: "73px",
      height: "34px",
      padding: "8px",
      borderRadius: "4px",
      gap: "10px",
      background: "#FFFFFF",
      color: "#000000",
      "data-tooltip": "Tooltip for Button 5",
    },
  });

  const [targetElement, setTargetElement] = useState("button3");
  const [tooltipText, setTooltipText] = useState(buttonStyles["button3"]["data-tooltip"]);
  const [textSize, setTextSize] = useState("16px");
  const [padding, setPadding] = useState("8px");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [cornerRadius, setCornerRadius] = useState("4px");
  const [tooltipWidth, setTooltipWidth] = useState("100px");
  const [arrowWidth, setArrowWidth] = useState("10px");
  const [arrowHeight, setArrowHeight] = useState("");

  useEffect(() => {
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      [targetElement]: {
        ...prevStyles[targetElement],
        fontSize: textSize,
        padding: padding,
        color: textColor,
        background: backgroundColor,
        borderRadius: cornerRadius,
        width: "73px",
        height: "34px",
      },
    }));
    setTooltipText(buttonStyles[targetElement]["data-tooltip"]);
  }, [
    targetElement,
    textSize,
    padding,
    textColor,
    backgroundColor,
    cornerRadius,
    tooltipWidth,
    arrowHeight,
    buttonStyles,
  ]);

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  const handleInputChange = (inputName, value) => {
    switch (inputName) {
      case "targetElement":
        setTargetElement(value);
        break;
      case "tooltipText":
        setTooltipText(value);
        setButtonStyles((prevStyles) => ({
          ...prevStyles,
          [targetElement]: {
            ...prevStyles[targetElement],
            "data-tooltip": value,
          },
        }));
        break;
      case "textSize":
        setTextSize(value);
        break;
      case "padding":
        setPadding(value);
        break;
      case "textColor":
        setTextColor(value);
        break;
      case "backgroundColor":
        setBackgroundColor(value);
        break;
      case "cornerRadius":
        setCornerRadius(value);
        break;
      case "tooltipWidth":
        setTooltipWidth(value);
        break;
      case "arrowWidth":
        setArrowWidth(value);
        break;
      case "arrowHeight":
        setArrowHeight(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Phone
        buttonStyles={buttonStyles}
        targetElement={targetElement}
        handleButtonClick={handleButtonClick}
      />
      <Form
        targetElement={targetElement}
        tooltipText={tooltipText}
        textSize={textSize}
        padding={padding}
        textColor={textColor}
        backgroundColor={backgroundColor}
        cornerRadius={cornerRadius}
        tooltipWidth={tooltipWidth}
        arrowWidth={arrowWidth}
        arrowHeight={arrowHeight}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default App;
