import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CustomerReport = () => {
  const percentage = [70, 80, 90];

  return (
    <section className="report__wrapper">
      <div className="report__wrapper-inner">
        <div className="good__great-inner">
          <h1 className="second__title mb-0">
            Premium Customers Report Better Results
          </h1>
          <p className="sub__title">
            We routinely survey Grammarly users and have found that:
          </p>
        </div>

        {/* Progress bar */}
        <div className="progress__bar">
          <div className="progress__bar-item">
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={percentage[0]}
                text={`${percentage[0]}%`}
                strokeWidth={3}
                styles={buildStyles({
                  textSize: "16px",
                  pathTransitionDuration: 1.5,
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  pathColor: `#11a683`,
                  textColor: "#000",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
              ;
            </div>
            <p>70% of Grammarly users find writing more enjoyable.</p>
          </div>
          <div className="progress__bar-item">
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={percentage[1]}
                text={`${percentage[1]}%`}
                strokeWidth={3}
                styles={buildStyles({
                  textSize: "16px",
                  pathTransitionDuration: 1.5,
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  pathColor: `#11a683`,
                  textColor: "#000",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
              ;
            </div>
            <p>80% of Grammarly users find writing more enjoyable.</p>
          </div>
          <div className="progress__bar-item">
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={percentage[2]}
                text={`${percentage[2]}%`}
                strokeWidth={3}
                styles={buildStyles({
                  textSize: "16px",
                  pathTransitionDuration: 1.5,
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  pathColor: `#11a683`,
                  textColor: "#000",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
              ;
            </div>
            <p>90% of Grammarly users find writing more enjoyable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReport;
