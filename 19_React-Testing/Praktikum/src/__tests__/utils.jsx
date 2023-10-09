/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "src/utils/states/redux/store/store";

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

const customRender = (component) => {
  return render(component, {
    wrapper: Providers,
  });
};

export * from "@testing-library/react";
export { customRender as Render };
