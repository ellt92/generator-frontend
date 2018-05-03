import React from "react";
import { shallow } from "enzyme";

import <%= classname %> from "../";

// describe("<%= classname %>", () => {
//   const component = shallow(<<%= classname %> />);
//   test("this happens", () => {
//   });
// });

// describe("<%= classname %>", () => {
//   const component = shallow(<<%= classname %> />);
//   describe("when ...", () => {
//     test("then ...", () => {
//     });
//   });
// });

describe("<%= classname %>", () => {
  test("is rendered", () => {
    const component = shallow(<<%= classname %> />);
    expect(component.find("<%= classname %>")).toHaveLength(1);
  });
});
