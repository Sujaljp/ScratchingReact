import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { useState } from "react";
import UserContext from "../utils/UserContext";

it("Should load the Header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

//it is an example of using extra arguments in getByRole
  const button = screen.getByRole("button", { name:"Login" });
  expect(button).toBeInTheDocument();
});

it("Should check for the Playlist component inside the header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Regex example
  const listitem = screen.getByText(/Playlist/);
  expect(listitem).toBeInTheDocument();
});


function Wrapper() {
  const [userName, setUserName] = useState("Guest");
  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );
}

it("Should check the button click function", () => {
  render(<Wrapper />);

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  // After clicking, you should check what happens.
  // Example: button changes to "Logout"
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});