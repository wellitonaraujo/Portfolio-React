import portfolio from "../../assets/portfolio.png";
import wgamer from "../../assets/wgamer.png";
import weather from "../../assets/weather.png";
import shoppingdev from "../../assets/shoppingdev.png";
import signin from "../../assets/signin.png";
import yourcoffee from "../../assets/yourcoffee.png";

interface Projets {
  src: string;
  alt: string;
  description: string;
  skill: string;
  link?: string;
}

export const projectsData: Projets[] = [
  {
    src: yourcoffee,
    alt: "SwiftUI",
    description: "Your Coffee",
    skill: "SwiftUI",
    link: "https://github.com/wellitonaraujo/YourCoffee-SwiftUI",
  },
  {
    src: weather,
    alt: "weather",
    description: "Weather",
    skill: "SwiftUI",
    link: "https://github.com/wellitonaraujo/WeatherApp-SwiftUI",
  },
  {
    src: signin,
    alt: "signin",
    description: "Signin",
    skill: "SwiftUI",
    link: "https://github.com/wellitonaraujo/signIn-screen-swiftUI",
  },
  {
    src: portfolio,
    alt: "portfolio",
    description: "Portfolio",
    skill: "SwiftUI",
  },
  {
    src: wgamer,
    alt: "wgamer",
    description: "Wgamer",
    skill: "SwiftUI",
    link: "https://github.com/wellitonaraujo/wgamer-app",
  },
  {
    src: shoppingdev,
    alt: "shoppingdev",
    description: "Shoppingdev",
    skill: "SwiftUI",
    link: "https://github.com/wellitonaraujo/shoppingDev-swiftUI",
  },
];
