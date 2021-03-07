import { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import Navbar from "./Components/NavBar/Navbar";
import data from "./Constant/data";
import Add from "./Components/AddMovie/Add";
import { Route, Switch, Link } from "react-router-dom";

import Details from "./Components/Details"

function App() {
  const [movie, setMovie] = useState(data);
  const handleSave = (newMovie) => {
    setMovie([...movie, newMovie]);
  };

  const [serchText, setSerchText] = useState("");
  const searchText = (text) => {
    setSerchText(text);
  };
  console.log("searchText", serchText);
  const [rate, setRate] = useState(0);
  console.log("rate", rate);
  return (
    <div>
      
      <Navbar handleSearch={searchText} setRate={setRate} />
      <Switch>
      <Route exact path="/">
        <Add handleAddMovie={handleSave} />
        <MovieList movie={movie} serchText={serchText} rate={rate} />
      </Route>
        <Route exact path="/Details/:id"  render={(props)=> (<Details {...props} movie={movie}/>)}/>
      </Switch>
    </div>
  );
}

export default App;