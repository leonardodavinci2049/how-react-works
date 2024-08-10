import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import DifferentContent from "./DifferentContent";

const Tabbed = ({ content }) => {
  const [activeTab, setActiveTab] = useState(0);

  // console.log(activeTab)

  return (
    <div>
      <div className="tabs">
        <Tab key="0" num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab key="1" num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab key="2" num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab key="3" num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent
          key={content.at(activeTab).summary}
          content={content.at(activeTab)}
        />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
};

export default Tabbed;
