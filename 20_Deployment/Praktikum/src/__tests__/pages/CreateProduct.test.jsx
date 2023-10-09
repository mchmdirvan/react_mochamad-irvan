/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen, within, fireEvent } from "../utils";

import App from "../../pages/CreateProduct";
import { describe } from "vitest";

const productInput = [
  "input-product-name",
  "input-product-category",
  "input-product-image",
  "input-product-freshness",
  "input-product-description",
  "input-product-price",
  "btn-submit",
];

describe("Index Product Page", () => {
  beforeEach(() => {
    render(<App />);
  });
  describe("Renders the page", () => {
    it("should render the form components", () => {
      const form = screen.getByLabelText("product-form");
      for (const input of productInput) {
        expect(within(form).getByLabelText(input)).toBeTruthy();
      }
    });
  });

  describe("Action for Product", () => {
    it("render product name input and displays entered text", () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      fireEvent.change(productNameInput, {
        target: { value: "New Product" },
      });
      expect(productNameInput).toHaveValue("New Product");
    });
  });
});
