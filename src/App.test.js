import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./pages/Home";
import UserLogin from "./components/CardLogin";
import UserRegister from "./components/CardRegister";
import Footer from "./components/Footer";
import Feed from "./pages/Feed";

describe("When the user enters the Home page", () => {
  test("Should be showing 'Sejam muito bem-vindos ao Giver!' text correctly", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const findText = screen.getByText(/Sejam muito bem-vindos ao Giver!/i);
    expect(findText).toBeInTheDocument();
  });
});

describe("When the user opens the register modal", () => {
  test("Should be showing 'Registre-se' text correctly", () => {
    render(
      <Provider store={store}>
        <UserRegister />
      </Provider>
    );
    const findText = screen.getByText(/Registre-se/i);
    expect(findText).toBeInTheDocument();
  });
});

describe("When the user opens the 'login' modal", () => {
  test("Should be showing 'Login' text correctly", () => {
    render(
      <Provider store={store}>
        <UserLogin />
      </Provider>
    );
    const findText = screen.getByText(/Login/i);
    expect(findText).toBeInTheDocument();
  });
});

describe("When the user reaches any page", () => {
  test("Should be showing the footer correctly", () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const findTextOne = screen.getByText(/Adilson Dias/i);
    const findTextTwo = screen.getByText(/Amanda Gonçalves/i);
    const findTextThree = screen.getByText(/Júlia Sperandio/i);
    const findTextFour = screen.getByText(/Lucas Ferreira/i);
    const findTextFive = screen.getByText(/Renan Nunes/i);

    expect(findTextOne).toBeInTheDocument();
    expect(findTextTwo).toBeInTheDocument();
    expect(findTextThree).toBeInTheDocument();
    expect(findTextFour).toBeInTheDocument();
    expect(findTextFive).toBeInTheDocument();
  });
});

describe("When the user opens the 'Home' page", () => {
  test("Should be showing the App description", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const findText = screen.getByText(/Doe roupas que você não usa mais/i);
    expect(findText).toBeInTheDocument();
  });
});
