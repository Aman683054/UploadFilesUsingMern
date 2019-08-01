import React, { Component } from "react";
import ReactDOM from "react-dom";
import AddLecture from "./Addlecture";

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={"/"}>
          <Switch>
            <Route
              exact
              path={add-lecture/}
              component={AddLecture}
            />
                      </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
