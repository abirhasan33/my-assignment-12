import React from "react";
import InfoCard from "./InfoCard";
import img1 from "../../image/pap-1.png";
import img2 from "../../image/pap-2.png";
import img3 from "../../image/pap-3 (2).png";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12">
      <InfoCard
        bgclass="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Injil Equipment"
        img={img1}
      ></InfoCard>
      <InfoCard
        bgclass="bg-[#19D3AE]"
        cardTitle="Tire Equipment"
        img={img2}
      ></InfoCard>
      <InfoCard
        bgclass="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Beering Equipment"
        img={img3}
      ></InfoCard>
    </div>
  );
};

export default Info;
