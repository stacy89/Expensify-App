import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotfoundPage";

test("should render NotFoundPage", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});