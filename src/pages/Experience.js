import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          BACHELOR IN STATISTICS ENGLISH SECTION FACULTY OF COMMERCE
          (STATISTICS DEPARTMENT) SOUTH VALLEY UNIVERSITY (2016-2020)
          </h3>
          <p> Bachelor's Degree </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021- 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          POSTGRADUATE DIPLOMA IN SOFTWARE ENGINEERING CAIRO UNIVERSITY (2021-2022)
          Faculty of Graduate Studies for Statistical Research
          </h3>
          <p> POSTGRADUATE Studies </p>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          MSC . MASTER IN SOFTWARE ENGINEERING CAIRO UNIVERSITY 
            Faculty of Graduate Studies for Statistical Research
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <p> Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="NOV 2020 - JULY 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
             Software Developer (Full Stack)  - MicroTech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hurgada - Egypt  for nearly 2 years
          </h4>
          <p>
          Building and maintain software application
          (web ) mainly using
          (Node.js ,html , css , react.js ) and also (Django) 
          but we also was using C++ for IOT application
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
