import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import { getCardFromLocalStorage } from '../../helpers/getCardFromLocalStorage';
import { setCardToLocalStorage } from '../../helpers/setCardToLocalStorage';
import './Tabs.scss';

export function Tabs() {
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = getCardFromLocalStorage('activeTab');
    return savedTab !== null ? Number(savedTab) : 0;
  });

  useEffect(() => {
    setCardToLocalStorage('activeTab', activeTab);
  }, [activeTab]);

  const { theme } = useContext(ThemeContext);

  return (
    <div className="tabs">
      <ul className="tabs__list">
        <li className="tabs__item">
          <NavLink
            to="/"
            className={`tabs__link ${activeTab === 0 ? (theme ? 'tabs__link_active-dark' : 'tabs__link_active-light') : ''}`}
            role="tab"
            aria-selected={activeTab === 0}
            onClick={(e) => {
              setActiveTab(0);
            }}
          >
            Articles
          </NavLink>
        </li>
        <li className="tabs__item">
          <NavLink
            to="/"
            className={`tabs__link ${activeTab === 1 ? (theme ? 'tabs__link_active-dark' : 'tabs__link_active-light') : ''}`}
            role="tab"
            aria-selected={activeTab === 1}
            onClick={(e) => {
              setActiveTab(1);
            }}
          >
            News
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
