import React from 'react';
import { shallow, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Explore from './index';
import Dropdown from './Dropdown';
import PlantTypeList from './PlantTypeList';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Explore Component', () => {
  let wrapper, props;
  beforeEach(() => {
    props = { isDropdownOpen: true };
    wrapper = shallow(<Explore {...props} />);
  });

  it('should define the Explore component', () => {
    const explore = wrapper.find(Explore);
    expect(explore).toBeDefined();
  });

  it('should be passed all required props', async () => {
    expect(wrapper.props().isDropdownOpen).toBeDefined();
    expect(wrapper.props().toggleDropdown).toBeDefined();
    expect(wrapper.props().activeFilters).toBeDefined();
    expect(wrapper.props().onFilterClick).toBeDefined();
    expect(wrapper.props().isSelected).toBeDefined();
  });

  it('should define the Dropdown component', () => {
    const dropdown = wrapper.find(Dropdown);
    expect(dropdown).toBeDefined();
  });

  it('should define the PlantTypeList component', () => {
    const plantTypeList = wrapper.find(PlantTypeList);
    expect(plantTypeList).toBeDefined();
  });

  it('should NOT render the Dropdown component when isDropdownOpen is false', () => {
    wrapper.setProps({ isDropdownOpen: false });
    const dropdownComponent = wrapper.find(Dropdown);
    expect(Object.keys(dropdownComponent).length).toBe(0);
  });
});
