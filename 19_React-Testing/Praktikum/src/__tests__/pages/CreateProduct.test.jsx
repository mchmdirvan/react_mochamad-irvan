/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen, within, fireEvent, waitFor } from "../utils";

import CreateProduct from "../../pages/CreateProduct";
import { expect } from "vitest";

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
    render(<CreateProduct />);
  });
  describe("Renders the form", () => {
    it("should render the form components", () => {
      const form = screen.getByLabelText("product-form");
      for (const input of productInput) {
        expect(within(form).getByLabelText(input)).toBeTruthy();
      }
    });
  });

  describe("Input Actions", () => {
    it("should allow entering and displaying text in the 'Product Name' input", () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");

      fireEvent.change(productNameInput, {
        target: { value: "New Product" },
      });
      expect(productNameInput).toHaveValue("New Product");
    });

    it("should save and display Product Category", () => {
      const form = screen.getByLabelText("product-form");
      const productCategorySelect = within(form).getByLabelText(
        "input-product-category"
      );

      fireEvent.change(productCategorySelect, {
        target: { value: "Fruits" },
      });
      expect(productCategorySelect).toHaveValue("Fruits");
    });

    it("should save and display Product Image", () => {
      const form = screen.getByLabelText("product-form");
      const productImage = within(form).getByLabelText("input-product-image");

      const file = new File(["sample-image"], "sample.png", {
        type: "image/png",
      });

      fireEvent.change(productImage, {
        target: { files: [file] },
      });
      expect(productImage).toBeInTheDocument([file]);
    });

    it("should save and display Product Freshness", () => {
      const form = screen.getByLabelText("product-form");
      const productFreshness = within(form).getByLabelText(
        "input-product-freshness"
      );

      fireEvent.click(productFreshness);
    });

    it("should save and display Product Description", () => {
      const form = screen.getByLabelText("product-form");
      const productDescription = within(form).getByLabelText(
        "input-product-description"
      );

      fireEvent.change(productDescription, {
        target: { value: "New Description" },
      });
      expect(productDescription).toHaveValue("New Description");
    });

    it("should save and display Product Price", () => {
      const form = screen.getByLabelText("product-form");
      const productPrice = within(form).getByLabelText("input-product-price");

      fireEvent.change(productPrice, {
        target: { value: 10 },
      });
      expect(productPrice).toHaveValue(10);
    });
  });

  describe("Validation Forms", () => {
    it("should validation form product name not null", async () => {
      const button = screen.getByLabelText("btn-submit");
      fireEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText("Please enter a valid Product Name"));
      });
    });

    it("should validation form product name when contain symbol", async () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");

      fireEvent.change(productNameInput, { target: { value: "product@name" } });

      const button = screen.getByLabelText("btn-submit");
      fireEvent.click(button);
      await waitFor(() => {
        expect(screen.getByText("Product Name should not contain symbols"));
      });
    });
  });
});
