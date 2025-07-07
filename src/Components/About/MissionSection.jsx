import React from "react";
import { useTranslation } from "react-i18next";
import { FaHeart, FaAward, FaLightbulb } from "react-icons/fa";
import "./MissionSection.css";
import OurMissionImg from "../../assets/svg/ourmission.svg"

const missions = [
  {
    icon: <FaHeart className="mission-icon" />, 
    titleKey: "mission.human.title", 
    descKey: "mission.human.desc"
  },
  {
    icon: <FaAward className="mission-icon" />, 
    titleKey: "mission.precision.title", 
    descKey: "mission.precision.desc"
  },
  {
    icon: <FaLightbulb className="mission-icon" />, 
    titleKey: "mission.innovation.title", 
    descKey: "mission.innovation.desc"
  },
];

const MissionSection = () => {
  const { t } = useTranslation();
  return (
    <section className="mission-section">
        <div className="mission-content">
        <h2 className="mission-title">{t("mission.title")}</h2>
      <p className="mission-desc">{t("mission.intro")}</p>
      <div className="mission-list">
        {missions.map((item, idx) => (
          <div className="mission-item" key={idx}>
            <span className="mission-icon-wrapper">{item.icon}</span>
            <div>
              <div className="mission-item-title">{t(item.titleKey)}</div>
              <div className="mission-item-desc">{t(item.descKey)}</div>
            </div>
          </div>
        ))}
      </div>
        </div>
      <img src={OurMissionImg} className="mission-img" alt="DEUTSOLUTIONS Mission" />
    </section>
  );
};

export default MissionSection; 