import portfolio from "../../assets/portfolio.png";
import wgamer from "../../assets/wgamer.png";
import weather from "../../assets/weather.png";
import shoppingdev from "../../assets/shoppingdev.png";
import signin from "../../assets/signin.png";

interface Projets {
  src: string;
  alt: string;
  description: string;
  skill: string;
}

export const projectsData: Projets[] = [
  {
    src: wgamer,
    alt: "React Native",
    description: "Wgamer",
    skill: "Swift/SwiftUI",
  },
  {
    src: weather,
    alt: "weather",
    description: "Weather",
    skill: "Swift/SwiftUI",
  },
  { src: signin, alt: "signin", description: "Signin", skill: "Swift/SwiftUI" },
  {
    src: portfolio,
    alt: "portfolio",
    description: "Portfolio",
    skill: "Swift/SwiftUI",
  },
  { src: wgamer, alt: "wgamer", description: "Wgamer", skill: "Swift/SwiftUI" },
  {
    src: shoppingdev,
    alt: "shoppingdev",
    description: "Shoppingdev",
    skill: "Swift/SwiftUI",
  },
];
