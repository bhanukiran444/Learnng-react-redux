import React from "react";
import List from "../components/List";
import Form from "../components/Form";
import Posts from "../components/Posts";

const App = () => (
  <div className="container">
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Api Articles</h2>
        <Posts />
      </div>
    </div>
  </div>
);

export default App;
