import React from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
      </nav>
      <div>
        <Route path="/charts" component={Test} />
        <Route exact path="/" components={} />
      </div>
    </BrowserRouter>
  );
}

export default App;
