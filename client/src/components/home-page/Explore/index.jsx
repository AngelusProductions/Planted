import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { vibes } from './utils';
import Card from './Card';
import {
  header,
  chooseVibe,
  caretUp,
  caretDown,
  menuOpen,
  menuClosed,
  menuItem,
  carousel,
} from './styles.css';

const Explore = () => {
  const [isOpen, toggle] = useState(false);
  return (
    <Fragment>
      <main className={header}>Find new plant friends.</main>
      <div className={chooseVibe}>
        CHOOSE YOUR VIBE
        <FontAwesomeIcon
          icon={faAngleDown}
          className={isOpen ? caretUp : caretDown}
          onClick={() => toggle(!isOpen)}
        />
      </div>
      <ul className={isOpen ? menuOpen : menuClosed}>
        {vibes.map(vibe => (
          <li className={menuItem}>{vibe}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Explore;
