import { fireEvent, render, screen } from "@testing-library/react";
import { song } from "../SongsData";
import "@testing-library/jest-dom";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import Playlist from "../components/Playlist";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(song);
    },
  });
});

it("Should load the album component", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Body />
          <Playlist/>
        </Provider>
      </BrowserRouter>
    );
  });

  const songList = screen.getAllByText("🎶");
  fireEvent.click(songList[0]);
  expect(screen.getByText("Playlist - 1")).toBeInTheDocument();
  fireEvent.click(songList[2]);
  expect(screen.getByText("Playlist - 2")).toBeInTheDocument();

  expect(screen.getAllByTestId("songCard").length).toBe(41)

  fireEvent.click(screen.getByText(/Clear Playlist/))

  expect(screen.getAllByTestId("songCard").length).toBe(39)


});
