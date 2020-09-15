import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from "./ColorList";

test("Fetches data and renders the bubbles", () => {
	// Arrange: simulate the behavior of rendering this component to the page, before we've made an api call
	const { queryAllByTestId, getAllByRole, rerender } = render(
		<ColorList colors={[]} />
	);
	const initialColors = queryAllByTestId(/test/i);
	expect(initialColors).toHaveLength(1);
	//Make the API Call
	rerender(<ColorList colors={data} updateColors="" />);
	const listItems = getAllByRole("listitem");
	expect(listItems).toHaveLength(11);
});
let data = [
	{
		color: "aliceblue",
		code: {
			hex: "#f0f8ff",
		},
		id: 1,
	},
	{
		color: "limegreen",
		code: {
			hex: "#99ddbc",
		},
		id: 2,
	},
	{
		color: "aqua",
		code: {
			hex: "#00ffff",
		},
		id: 3,
	},
	{
		color: "aquamarine",
		code: {
			hex: "#7fffd4",
		},
		id: 4,
	},
	{
		color: "lilac",
		code: {
			hex: "#9a99dd",
		},
		id: 5,
	},
	{
		color: "softpink",
		code: {
			hex: "#dd99ba",
		},
		id: 6,
	},
	{
		color: "bisque",
		code: {
			hex: "#dd9a99",
		},
		id: 7,
	},
	{
		color: "softyellow",
		code: {
			hex: "#dcdd99",
		},
		id: 8,
	},
	{
		color: "blanchedalmond",
		code: {
			hex: "#ffebcd",
		},
		id: 9,
	},
	{
		color: "blue",
		code: {
			hex: "#6093ca",
		},
		id: 10,
	},
	{
		color: "blueviolet",
		code: {
			hex: "#8a2be2",
		},
		id: 11,
	},
];
