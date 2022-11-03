import React from "react";

export default function Profile() {
  return (
    <section className="profile_section">
      <div>
        <img
          src="./assets/default-img.png"
          alt="profile avatar"
          id="profile__img"
        />
        <p>IbiminaaH</p>
        <p id="slack" hidden>
          Ibimina
        </p>
      </div>
      <div className="share-wrap">
        <div className="tool-tip">
          <span>Share link</span>
          <img
            src="./assets/bottom-center.svg"
            alt="arrow icon"
            className="arrow"
          />
        </div>
        <picture className="share">
          <source
            srcset="./assets/share-default.svg"
            media="(min-width:40rem)"
          />
          <img src="./assets/default-dot.svg" alt="more icon" />
        </picture>
      </div>
    </section>
  );
}
