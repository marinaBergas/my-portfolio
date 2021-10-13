import calmaLogo from "../assets/calmaLogo.png";
import calmaScreenShot from "../assets/calmascreenshot.png";
import MegoScreenShot from "../assets/megoscreenshot.png";
import mogoLogo from "../assets/mogologo.png";
import SchoolScreenShot from "../assets/school-mapscreenshot.png";
import schoolLogo from "../assets/diamond.svg";
import restaurantLogo from "../assets/restaurantlogo.png";
import RestaurantScreenShot from "../assets/restaurantScreenShot.png";
import ToDoListScreenShot from "../assets/TodoList-screenshot.png";
import ToDoListLogo from "../assets/todolist-logo.png";
import servicesLogo from "../assets/servicesLogo.png";
import ServicesScreenShot from "../assets/services-screenshots.png";

export const navbarlinksRight = [
  {
    id: 1,
    linkName: "About Me",
    link: "#about",
  },
  {
    id: 2,
    linkName: "Projects",
    link: "#projects",
  },
  {
    id: 3,
    linkName: "Skills",
    link: "#Skills",
  },
  {
    id: 4,
    linkName: "Resume",
    link: "https://docs.google.com/document/d/1mMw_q-KDrhouaa7jBCH_YuTSiM-iHwXtB2m8uCE4Hn8/edit",
  },
];
export const projects = [
  {
    id: 1,
    logoimg: `${calmaLogo}`,
    url: `${"https://marinabergas.github.io/Calma/#/"}`,
    imgscreenshot: `${calmaScreenShot}`,
    header: "Calma Psychological Website",
    paragraph:
      " A Psychological booking website built with React, Redux,Material-UI, and Firebase",
  },
  {
    id: 2,
    logoimg: `${servicesLogo}`,
    url: `${" https://marinabergas.github.io/shipment-service/"}`,
    imgscreenshot: `${ServicesScreenShot}`,
    header: "Shipment-service",
    paragraph:
      "Shipment-services website using react hooks,props ,i18 translate,rest api use react axios,you can check 7234258,6636255,9442984 and other",
  },
  {
    id: 3,
    logoimg: `${schoolLogo}`,
    url: `${"https://marinabergas.github.io/map-feature/#/"}`,
    imgscreenshot: `${SchoolScreenShot}`,
    header: "School map ",
    paragraph:
      "react website  using leafletmap library carousel with javascript",
  },
  {
    id: 4,
    logoimg: `${ToDoListLogo}`,
    url: `${"https://marinabergas.github.io/TodoList/"}`,
    imgscreenshot: `${ToDoListScreenShot}`,
    header: "Todo website app",
    paragraph:
      "Todo website app using react fake api deploy with github use hooks ,props",
  },
  {
    id: 5,
    logoimg: `${mogoLogo}`,
    url: `${"https://marinabergas.github.io/mego-template-/"}`,
    imgscreenshot: `${MegoScreenShot}`,
    header: "Mogo landpage",
    paragraph:
      " creative template responsive landpage using html sass bootstrap",
  },
  {
    id: 6,
    logoimg: `${restaurantLogo}`,
    url: `${"https://marinabergas.github.io/restaurant2/"}`,
    imgscreenshot: `${RestaurantScreenShot}`,
    header: "restaurant website",
    paragraph: "restaurant booking website with html less bootstrap jquery ",
  },
];
