import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBox,
  faBookOpen,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function App() {
  const [activeID, setActive] = useState(0);

  const clickHandler = (index) => {
    setActive(index);
  };

  const imgArr = [
    {
      image:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
      text: "home"
    },
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      text: "work"
    },
    {
      image:
        "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
      text: "blog"
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      text: "about"
    }
  ];

  const iconsArr = [
    {
      icon: faHome,
      title: "Home"
    },
    {
      icon: faBox,
      title: "Work"
    },
    {
      icon: faBookOpen,
      title: "Blog"
    },
    {
      icon: faUsers,
      title: "About Us"
    }
  ];

  return (
    <div className="phone">
      {imgArr.map((img, idx) => (
        <img
          className={activeID === idx ? "content show" : "content"}
          src={img.image}
          alt={img.text}
          key={img.text}
        />
      ))}
      <nav>
        <ul>
          {iconsArr.map((icons, idx) => (
            <li
              className={activeID === idx ? "active" : ""}
              key={icons.title}
              onClick={() => clickHandler(idx)}
            >
              <FontAwesomeIcon icon={icons.icon} />
              <p>{icons.title}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
