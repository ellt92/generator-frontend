import React from 'react';
import { shallowWithState } from "enzyme-redux";

import <%= classname %> from '../';

//describe("<%= classname %>", () => {
  //const component = shallow(<<%= classname %> />);
  //describe("when", () => {
    //test("then", () => {
    //});
  //});
//});

//describe("<%= classname %>", () => {
  //const component = shallow(<<%= classname %> />);
  //describe("this happens", () => {
  //});
//});

describe('<%= classname %>', () => {
  test('is rendered', () => {
    const component = shallowWithState(<<%= classname %> />, {});
    expect(component.find('<%= classname %>')).toHaveLength(1);
  });
});
