import React from "react";

import styled from "styled-components";

import SectionList from "../../../constants/SectionList";
import SectionLayout from "../../layout/SectionLayout";
import { PUBLIC_URL } from "../../../common/config";
import ActivityItem from "../../molecule/section/activity/ActivityItem";

const ActivitySection = () => {
  return (
    <SectionLayout
      section={SectionList.ACTIVITY}
      bgStyle={{
        backgroundImage: `
        linear-gradient(
          rgba(255, 255, 255, 1) 10%,
          rgba(255, 255, 255, 1) 25%,
          rgba(255, 255, 255, 0.8) 50%,
          rgba(255, 255, 255, 0.7) 75%,
          rgba(255, 255, 255, 0.6) 100%
        ), 
        url(${PUBLIC_URL}/img/hackathon.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
        backgroundSize: "cover",
      }}
    >
      <ActivityItem />
    </SectionLayout>
  );
};

export default ActivitySection;
