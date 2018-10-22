import React from "react";
import { storiesOf } from "@storybook/react";

import {
  NavigationSection,
  NavigationLabel,
  NavigationMain
} from "../components";

import "../styles/index.css";

import { IconArrow, IconMinus, IconPlus, IconSearch } from "./static/icons";

const colors = [
  {
    name: "Gainsboro",
    hexcode: "#D9D9D9"
  },
  {
    name: "Dim Gray",
    hexcode: "#676E6C"
  },
  {
    name: "Dark Slate Gray",
    hexcode: "#333333"
  },
  {
    name: "White",
    hexcode: "#000000"
  },
  {
    name: "Coral Orange",
    hexcode: "#EF7D30"
  },
  {
    name: "Indian Red",
    hexcode: "#C9146C"
  }
];

const centerStyles = {
  textAlign: "center",
  paddingTop: "50px",
  padding: 20
};

const CenterDecorator = storyFn => <div style={centerStyles}>{storyFn()}</div>;

storiesOf("Design Language", module)
  .add("Colors", () => {
    const ColorContainer = ({ name, hexcode }) => {
      const containerStyle = {
        width: 100,
        height: 100,
        borderRadius: 15,
        background: hexcode
      };
      const textStyle = {
        color: "#666666",
        fontFamily: "Helvetica Neue",
        fontSize: 13,
        padding: "10px 0",
        letterSpacing: "0.7px"
      };
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 0"
          }}
        >
          <div style={textStyle}>{name}</div>
          <div style={containerStyle} />
          <div style={textStyle}>{hexcode}</div>
        </div>
      );
    };
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {colors.map(color => (
          <ColorContainer name={color.name} hexcode={color.hexcode} />
        ))}
      </div>
    );
  })
  .add("Fonts", () => {
    const sizes = [13, 14, 16, 17, 18, 20, 24, 30, 40, 60, 70];
    const Text = ({ color, fontSize, word, weight }) => {
      const textStyle = {
        color,
        fontSize,
        padding: "10px 20px",
        letterSpacing: "0.7px",
        fontWeight: weight
      };
      return <div style={textStyle}>{`${fontSize}px - ${word}`}</div>;
    };
    const FontSizeDisplay = ({
      backgroundColor = "white",
      color,
      word,
      fontSizes,
      weight = 300
    }) => (
      <div
        style={{
          background: backgroundColor,
          width: "calc(100%/2)",
          height: "120vh",
          fontFamily: "Helvetica Neue"
        }}
      >
        <h2 style={{ color, fontWeight: weight, margin: 20, letterSpacing: 1 }}>
          {`${weight === 300 ? "Regular" : "Bold"} - ${
            color === "white" ? "White" : "Dark Slate Gray"
          }`}
        </h2>
        {fontSizes.map(size => (
          <Text color={color} fontSize={size} word={word} weight={weight} />
        ))}
      </div>
    );
    return (
      <section>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <FontSizeDisplay
            color={colors[2].hexcode}
            word="Helvetica Neue"
            fontSizes={sizes}
          />
          <FontSizeDisplay
            backgroundColor={colors[2].hexcode}
            color="white"
            word="Helvetica Neue"
            fontSizes={sizes}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <FontSizeDisplay
            weight={700}
            color={colors[2].hexcode}
            word="Helvetica Neue"
            fontSizes={sizes}
          />
          <FontSizeDisplay
            weight={700}
            backgroundColor={colors[2].hexcode}
            color="white"
            word="Helvetica Neue"
            fontSizes={sizes}
          />
        </div>
      </section>
    );
  })
  .add("Iconography", () => {
    const IconWrapper = ({ children, background }) => {
      const wrapperStyle = {
        height: 100,
        width: 100,
        borderRadius: "50%",
        background: background || colors[1].hexcode,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      };
      return <div style={wrapperStyle}>{children}</div>;
    };

    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: 500,
            paddingTop: 50
          }}
        >
          <IconWrapper>
            <img src={IconArrow} alt="hero banner carousel arrow icon left" />
          </IconWrapper>
          <IconWrapper>
            <img src={IconMinus} alt="exclude region minus icon" />
          </IconWrapper>
          <IconWrapper>
            <img src={IconPlus} alt="include region plus icon" />
          </IconWrapper>
          <IconWrapper background={colors[0].hexcode}>
            <img src={IconSearch} alt="search icon" />
          </IconWrapper>
        </div>
      </div>
    );
  });

storiesOf("Top Navigation", module)
  .addDecorator(CenterDecorator)
  .add("NavigationLabel", () => (
    <div>
      <NavigationLabel name="ABOUT US" />
      <NavigationLabel name="OUR WORK" />
      <NavigationLabel name="NEWS" />
      <NavigationLabel name="CAREER" />
      <NavigationLabel name="CONTACT" isLast={true} />
    </div>
  ))
  .add("NavigationSection", () => <NavigationSection />)
  .add("NavigationMain", () => (
    <div style={{ width: "100%" }}>
      <NavigationMain />
    </div>
  ))