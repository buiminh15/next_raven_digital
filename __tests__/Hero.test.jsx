import { render, screen } from "@testing-library/react";
import Hero from "../src/components/Hero";
import "@testing-library/jest-dom";
import { LINKS } from "../src/constants";
describe("Hero", () => {
  it("should render headline text", () => {
    const { getByText } = render(<Hero />);
    const parapraphText = getByText(/lorem ipsum /i);
    const headlineText = getByText(/we are digital/i);
    expect(parapraphText).toBeInTheDocument();
    expect(headlineText).toBeInTheDocument();
  });
  it("should render banner", () => {
    render(<Hero />);
    const testImage = document.querySelector("img");
    expect(testImage.alt).toContain("company banner");
  });

  it("should render social link", () => {
    const { getByText } = render(<Hero />);
    for (const obj of LINKS) {
      const linkEl = getByText(obj.name);
      expect(linkEl).toBeInTheDocument();
    }
  });
});
