import Accordion from "./Accordion";
import { render, screen } from "@testing-library/react";

describe("Accordion", () => {
  test("should add two numbers", () => {
    render(
      <Accordion title="My Accordion">
        <h3>My content</h3>
        <p>Some content</p>
      </Accordion>
    );
    expect(screen.getByText("My Accordion")).toBeDefined();
  });
});
