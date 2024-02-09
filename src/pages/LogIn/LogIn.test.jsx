import React from "react";
import LogIn from ".";
import { render } from "@testing-library/react";

jest.mock("axios", () => {});

describe('Testing Login page', () => {
  it('should render without crashing', () => {
    render(<LogIn />);
  });
});