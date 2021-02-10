import { Overmind } from "overmind";
import { createHook } from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

const onInitialize = ({ actions, effects }) => {
  console.log("onInitialize passed actions:")
  console.dir(actions);
  effects.router.route("/", actions.showHomePage);
  effects.router.route("/users", actions.showUsersPage);
  effects.router.route("/users/:id", actions.showUserModal);
  effects.router.start();
};

const config = {
  onInitialize,
  state,
  actions,
  effects
};

const overmind = new Overmind(config);

export const useOvermind = createHook(overmind);
