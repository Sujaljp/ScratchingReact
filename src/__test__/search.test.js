//Example of Integration Testing

import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../components/Body";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import SideBar from "../components/Sidebar";
import "@testing-library/jest-dom";
import { song } from "../SongsData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(song);
    },
  });
});

// It runs before running all the tests
beforeAll(()=>{
    console.log("Before all")
})

// It runs before each test
// very helpfull to do cleanup tasks
beforeEach(()=>{
    console.log("Before each")
})

afterEach(()=>{
    console.log("After each")
})

afterAll(()=>{
    console.log("After all")
})

it("Should render the body component", async () => {
  await act(async () => {
    return render(
      <Provider store={appStore}>
        <Body />
      </Provider>
    );
  });
});

it("Should render the sidebar", async () => {
  await act(async () => {
    return render(
      <Provider store={appStore}>
        <SideBar />
      </Provider>
    );
  });

  const song = screen.getByText(/Kesariya/);

  expect(song).toBeInTheDocument();
});

it("Should search song list for Tum text input", async () => {
  await act(async () => {
    return render(
      <Provider store={appStore}>
        <SideBar />
      </Provider>
    );
  });

  const songList = screen.getAllByTestId("songCard");
  expect(songList.length).toBe(39);
  const searchButton = screen.getByTestId("searchButton");
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Tum" } });
  fireEvent.click(searchButton);
  //
  const filteredSongList = screen.getAllByTestId("songCard");
  expect(filteredSongList.length).toBe(4);
});
