import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DoneIcon from "@mui/icons-material/Done";

const UpLevel = () => {
  const freePlans = ["Spelling", "Grammar", "Punctuation", "Conciseness"];
  const premiumPlans = [
    "Everything in Free",
    "Clarity-focused sentence rewrites",
    "Additional advanced suggestions",
    "Formality level",
  ];

  return (
    <section className="uplevel__wrapper">
      <div className="good__great-inner">
        <h1 className="second__title mb-0">Up-Level Your Communication</h1>
        <p className="sub__title">
          Unlock Grammarly Premium’s advanced features and suggestions.
        </p>
      </div>
      <div className="uplevel-plans">
        {/* Free Plan Section */}
        <div className="free-plan">
          <small>For Casual Writing</small>
          <h3>Free</h3>
          <span className="plan__desc-info">Basic writing suggestions.</span>
          <button type="button" className="green__btn disabled__btn">
            Included In Premium
          </button>
          <div className="free-lists">
            <List>
              {freePlans.map((item, index) => (
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>

        {/* Premium Plan Section */}
        <div className="premium-plan">
          <small>FOR WORK OR SCHOOL</small>
          <h3>Premium</h3>
          <span className="plan__desc-info">
            Style, tone, and clarity improvements for writing at work and
            school.
          </span>
          <button type="button" className="green__btn">
            Upgrade to Grammarly Premium
          </button>
          <div className="free-lists">
            <List>
              {premiumPlans.map((item) => (
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpLevel;
