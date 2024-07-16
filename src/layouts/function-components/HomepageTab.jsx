import { useState } from "react";
import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";

const HomepageTab = ({ homepage_tab: { tab_list, title, description } }) => {
  const [tab, setTab] = useState(0);
  return (
    <div className="tab gx-5 row items-center mt-20">
      <div className="lg:col-7 lg:order-2">
        <div></div>
        <div className="tab-content">
          {tab_list.map((item, index) => (
            <div
              key={index}
              className={`tab-content-panel ${
                tab === index ? "active" : undefined
              }`}
            >
              {/* <img className="w-full object-contain" src={item.image} /> */}
              <iframe src="https://www.google.com/maps/d/embed?mid=1vHlNkxsSTK_pPS7aDqkFqcSC971Mb2fU&hl=es&ehbc=2E312F" width="640" height="480"></iframe>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
        <div className="text-container">
          <h2 className="lg:text-4xl">{title}</h2>
          <p className="mt-4">{description}</p>
          <ul className="tab-nav mt-4 border-b-0 flex flex-col ">
            {tab_list.map((item, index) => {
              const FeatherIcon = Icon[humanize(item.icon)];
              return (
                <li
                  key={index}
                  className={`tab-nav-item ${
                    tab === index ? "active" : undefined
                  }`}
                 // onClick={() => setTab(index)}
                  
                >
                  <span className="tab-icon mr-3">
                    {" "}
                    <FeatherIcon />
                  </span>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomepageTab;
