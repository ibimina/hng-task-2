import React from "react";
import { Link } from "react-router-dom";

export default function LinksBtn() {
  const links = [
    {
      text: "Twitter Link",
      id: "twitter",
      href: "https://twitter.com/ibiminaaH",
    },
    {
      text: "Zuri Team",
      id: "btn__zuri",
      href: "https://training.zuri.team/",
      title: "Register for Zuri Trainings",
    },
    {
      text: "Zuri Books",
      id: "books",
      href: "https://books.zuri.team",
      title: "A library of Design and Coding Books",
    },
    {
      text: "Python Books",
      id: "book__python",
      href: "https://books.zuri.team/python-for-beginners?ref_id=ibimina",

      title:
        "Setup your game as a python programmer with the following materials",
    },
    {
      text: "Background Check for Coders",
      id: "pitch",
      href: "https://background.zuri.team",
      title: "A service for background checks on Codes",
    },
    {
      text: "Design Books",
      id: "book__design",
      href: "https://books.zuri.team/design-rules",
      title: "Get the free design book offered by Zuri",
    },
  ];
  return (
    <div className="link_div">
      {links.map((link) => (
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer"
          id={link.id}
          className="btn"
          key={link.id}
        >
          {link.text}
          {link.title && <span>{link.title}</span>}
        </a>
      ))}
      <Link to="/contact" className="btn" id="contact">
        contact
      </Link>
      <div className="social_icon">
        <img src="/assets/slack.svg" alt="slack icon" />
        <img src="/assets/github.svg" alt="github icon" />
      </div>
    </div>
  );
}
