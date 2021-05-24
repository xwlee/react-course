import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={AllMeetupsPage} />
        <Route path="/new-meetup" component={NewMeetupPage} />
        <Route path="/favourites" component={FavouritesPage} />
      </Switch>
    </Layout>
  );
};

export default App;
