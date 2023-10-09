import "@testing-library/jest-dom";
import { render, screen, within, fireEvent } from "../utils";

import App from "../../pages/CreateProduct";


describe("Index Product Page", () => {
  beforeEach(() => {
    render(<App />);
  });
  describe("Renders the page", () => {
    it("should render the form components", () => {
      const form = screen.getByLabelText("product-form");
      expect(within(form.getByLabelText("input-product-name")).toBeTruthty());   
    });
  });
});
