import React from "react";
import { shallow } from "enzyme";

import <%= classname %> from "../";

/*
 * SnapShot Test
 *

import ShallowRenderer from "react-test-renderer/shallow";

describe("<%= classname %>", () => {
  const renderer = new ShallowRenderer();
  const component = renderer.render(<<%= classname %> loading />);
  test("snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

*/

/*
 * Render test
 *

describe("<%= classname %>", () => {
  const component = shallow(<<%= classname %> />);
  test("this happens", () => {
  });
});

*/

/*
 * Given When Then test
 *

describe("<%= classname %>", () => {
  const component = shallow(<<%= classname %> />);
  describe("when ...", () => {
    test("then ...", () => {
    });
  });
});

*/

describe("<%= classname %>", () => {
  test("is rendered", () => {
    const component = shallow(<<%= classname %> />);
    expect(component.find("<%= classname %>")).toHaveLength(1);
  });
});
