import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Dropdown';
import PlantTypeList from '../PlantTypeList';
import {
  header as headerClass,
  promptFiltered,
  promptUnfiltered,
  caretUp,
  caretDown,
} from './styles.css';

export const exploreText = {
  header: 'Find new plant friends.',
  prompt: 'CHOOSE YOUR VIBE',
};

const Explore = () => {
  const [isDropdownOpen, toggleDropdown] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  const checkIfSelected = filter => activeFilters.includes(filter);
  const onFilterClick = e => {
    const filterId =
      e.target.id === '' ? e.target.parentElement.id : e.target.id;
    checkIfSelected(filterId)
      ? setActiveFilters(activeFilters.filter(f => f !== filterId))
      : setActiveFilters([...activeFilters, filterId]);
  };

  const baseProps = {
    isDropdownOpen,
    toggleDropdown,
    activeFilters,
    onFilterClick,
    checkIfSelected,
  };
  return <BaseExplore {...baseProps} />;
};

const BaseExplore = props => {
  const { isDropdownOpen, activeFilters, toggleDropdown } = props;
  const { header, prompt } = exploreText;
  return (
    <Fragment>
      <div className={headerClass}>{header}</div>
      <div
        onClick={() => toggleDropdown(!isDropdownOpen)}
        className={activeFilters.length > 0 ? promptFiltered : promptUnfiltered}
      >
        {prompt}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={isDropdownOpen ? caretUp : caretDown}
        />
      </div>
      {isDropdownOpen && <Dropdown {...props} />}
      <PlantTypeList {...props} />
    </Fragment>
  );
};

export default Explore;
