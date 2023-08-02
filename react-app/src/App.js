import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import MoviesBrowser from "./components/MoviesBrowser";
import MovieDetails from "./components/MovieDetails";
import ListsBrowser from "./components/ListsBrowser";
import ListDetails from "./components/ListDetails";
import CreateListPage from "./components/CreateListPage";
import EditListPage from "./components/EditListPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import ProfileSettings from "./components/ProfileSettings";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route> */}
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies/">
            <MoviesBrowser />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route exact path="/lists/">
            <ListsBrowser />
          </Route>
          <Route exact path="/lists/new">
            <CreateListPage />
          </Route>
          <Route path="/:userId/lists/:listId">
            <EditListPage />
          </Route>
          <Route exact path="/lists/:listId">
            <ListDetails />
          </Route>
          <Route exact path="/profiles/:profileId">
            <ProfilePage />
          </Route>
          <Route exact path="/settings">
            <ProfileSettings/>
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
