import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
// import { colors as mockColors } from "../api/colors";

// jest.mock("../api/colors")


test("Fetches data and renders the bubbles", () => {
	//Arrange
	const { rerender } = render(<BubblePage />);

	render(<BubblePage />);


});

