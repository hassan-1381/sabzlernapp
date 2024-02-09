import React from "react";
import "./SectionHeader.css";
export default function SectionHeader({ title, text, btntitle, }) {
  return (
    <>
      <div class="courses-header">
        <div class="courses-header__right">
          <span class="courses-header__title title">{title}</span>
          <span class="courses-header__text">{text}</span>
        </div>
        {btntitle && (
          <div class="courses-header__left">
            <a href="#" class="courses-header__link">
              {btntitle}
              <i class="fas fa-arrow-left courses-header__icon"></i>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
