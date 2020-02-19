import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from '../components/header/Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const store = createStore(() => ({ count: 1000 }))

describe("[Header Tests]", () => {
  it(`should have to have an H1`, () => {
    const { getByTestId } = render(<Provider store={store}><Header /></Provider>);

    expect(getByTestId("headerH1")).toHaveTextContent("ONLINE PRODUCER");
  });
});
