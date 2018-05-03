import React from "react";
import { shallowWithState } from "enzyme-redux";

import <%= classname %> from "../";

// describe("<%= classname %>", () => {
//   const component = shallowWithState(<<%= classname %> />, {});
//   test("this happens", () => {
//   });
// });
//
// describe("<%= classname %>", () => {
//   const component = shallowWithState(<<%= classname %> />, {});
//   describe("when ...", () => {
//     test("then ...", () => {
//     });
//   });
// });

describe("<%= classname %>", () => {
  test("is rendered", () => {
    const component = shallowWithState(<<%= classname %> />, {});
    expect(component.find("<%= classname %>")).toHaveLength(1);
  });
});
