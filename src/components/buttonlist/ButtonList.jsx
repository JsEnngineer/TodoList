import React, {useState} from 'react';
import {List} from '../list/List';
import {Badge} from '../badge/Badge';

import './ButtonList.scss';

export const ButtonList = ({colors}) => {
  const [popup, setPopup] = useState(true);
  const [selColor, setSelColor] = useState(null);

  return (
    <div className="add-list">
      <List
        onClick={() => setPopup(true)}
        items={[
          {
            className: 'list__button',
            icon: (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1V11" stroke="#868686" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 6H11" stroke="#868686" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
            name: 'Добавить задачу'
          },
        ]}
      />
      {popup && (<div className="add-list__popup">
        <input className="field" type="text" placeholder="Название задачи"/>
        <div className="add-list__popup-colors">
          {colors.map((color) =>
            (<Badge onClick={() => setSelColor(color.id)}
                    key={color.id}
                    color={color.name}
                    className={selColor === color.id && 'active'}
              />
            ))}
        </div>
        <button className="button">Добавить</button>
      </div>)}
    </div>
  );
};