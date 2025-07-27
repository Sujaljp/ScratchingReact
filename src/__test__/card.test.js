import { render, screen } from "@testing-library/react";
import Card, { actorCard } from "../components/Card";
import { playlists } from "../PlaylistsData";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { artists } from "../ArtistsData";

//Examples of component with props 
// You have to create the mock data for this to work 
// I already had in this case so I didn't create

it("Should render the card component", () => {
  const val = playlists[0];
  render(
    <BrowserRouter>
      <Card title={val.title} image={val.image} description={val.subtitle} />
    </BrowserRouter>
  );
  const title = screen.getByText(val.title);
  expect(title).toBeInTheDocument();
});

it("Should render the artist card component that is a HOC", () => {
  const ActorCard = actorCard(Card);
  const val = artists[2]
  render(
    <BrowserRouter>
      <ActorCard type={"artist"} title={val.name} image={val.image} description={val.role.charAt(0).toUpperCase()+val.role.slice(1)}/>
    </BrowserRouter>
  );
  const title = screen.getByText(val.name);
  expect(title).toBeInTheDocument();
});
 