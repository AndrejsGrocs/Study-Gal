import React from "react";

import InstructorNav from "../InstructorNav/InstructorNav";
import InstructorCards from "../../views/Instructor/InstructorCards";
import data from "../../components/Data/Data";

export default function InstructorPage() {
  const { instructorData } = data;

  return (
    <div className="instructor-page-body">
      <InstructorNav />

      <div className="cards-section">
        {instructorData.map((idata) => (
          <InstructorCards key={idata.id} idata={idata} />
        ))}

        {/* <InstructorCards/> */}
      </div>
    </div>
  );
}
