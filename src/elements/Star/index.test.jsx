import {render} from "@testing-library/react";
import { expect, test } from 'vitest'; 
import Star from './index';


test("should have props [value, width, height, spacing]", () => {
  const height = 40, width = 40, spacing = 4;
  const {container} = render(<Star height={height} width={width} spacing={spacing} value={4.33} />);
  const starYellow = "div.stars div.star:not(.placeholder)"

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toHaveAttribute("style", expect.stringContaining(`height: ${height}`));
  expect(container.querySelector(starYellow)).toBeInTheDocument();
  expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`width: ${width}`))
  expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`height: ${height}`))
  expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`margin-right: ${spacing}`))
})