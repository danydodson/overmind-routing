import React from "react";
import { useOvermind } from "../overmind";
import Users from './Users';
import UserModal from './UserModal'

import JSONfn from '../util'

const App = () => {
  const { state } = useOvermind();

  return (
    <div className="container">
      
      <div className="subhead">
        <h3>overmind.js <a href='https://www.overmindjs.org/guides/intermediate/02_routing?view=react&typescript=false'>"state-first" routing</a> demo</h3>
      </div>

      <nav className="mainnav">
        <h3><a href="/">Home</a></h3>
        <h3><a href="/users">Users</a></h3>
        <hr />
        {state.currentPage === "users" ? <Users /> : null}
      </nav>
      
      <div className="content">
        {state.currentPage === "home" ? <h1 className="subhead">Hello world!</h1> : null}
        {state.isLoadingUserDetails || state.modalUser ? <UserModal /> : null}
      </div>
      
      <div className="quote">
        {/* TODO use state.showStateJson to show/hide this */}
        <h3>state:</h3>
        <pre>{JSONfn(state)}</pre>
      </div>
      
    </div>
  );
};

export default App;
