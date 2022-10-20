import React, {useState} from 'react';
import {List} from '../list/List';
import {Badge} from '../badge/Badge';

import './ButtonList.scss';

import closeSvg from '../../assets/img/close.svg';

export const ButtonList = ({colors, onAdd}) => {
  const [popup, setPopup] = useState(false);
  const [selColor, setSelColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState('');

  const onClose = () => {
    setPopup(false);
    setInputValue('');
    setSelColor(colors[0].id);
  }

  const addList = () => {
    if (!inputValue) {
      alert('Введите название задачи');
      return;
    }
    const color = colors.filter(c => c.id === selColor)[0].name;
    onAdd({ id: Math.random(), name:inputValue, color});
    onClose();
  }


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
        <img
          onClick={onClose}
          src={closeSvg}
          alt="Close button"
          className="add-list__popup-close"
        />

        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="field"
          type="text"
          placeholder="Название задачи"
        />

        <div className="add-list__popup-colors">
          {colors.map((color) =>
            (<Badge onClick={() => setSelColor(color.id)}
                    key={color.id}
                    color={color.name}
                    className={selColor === color.id && 'active'}
              />
            ))}
        </div>
        <button onClick={addList} className="button">Добавить</button>
      </div>)}
    </div>
  );
};