import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRobot, FaBalanceScale, FaUniversity, FaBuilding } from 'react-icons/fa';
import './CardsSlider.css';

const cards = [
  {
    icon: <FaRobot className="card-icon" />,
    titleKey: 'cards.ai.title',
    descKey: 'cards.ai.desc',
  },
  {
    icon: <FaBalanceScale className="card-icon" />,
    titleKey: 'cards.legal.title',
    descKey: 'cards.legal.desc',
  },
  {
    icon: <FaUniversity className="card-icon" />,
    titleKey: 'cards.study.title',
    descKey: 'cards.study.desc',
  },
  {
    icon: <FaBuilding className="card-icon" />,
    titleKey: 'cards.corporate.title',
    descKey: 'cards.corporate.desc',
  },
];

const CardsSlider = () => {
  const { t } = useTranslation();
  return (
    <div className="cards-slider-wrapper">
      {cards.map((card, idx) => (
        <div className="card-slider-item" key={idx}>
            {card.icon}
          <div className="card-title">{t(card.titleKey)}</div>
          <div className="card-desc">{t(card.descKey)}</div>
        </div>
      ))}
    </div>
  );
};

export default CardsSlider;
