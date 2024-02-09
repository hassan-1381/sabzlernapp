import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./LastCourses.css";
export default function LastCourses() {
  return (
    <>
      <div class="courses">
        <div class="container">
          <SectionHeader
            title={"جدیدترین دوره ها "}
            text={"سکوی پرتاپ شما به سمت موفقیت "}
            btntitle={"تمامی دوره ها"}
          />
        </div>
      </div>
    </>
  );
}
