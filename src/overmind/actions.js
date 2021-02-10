import { parallel, action } from "overmind";

export const showHomePage = ({ state }) => {
  state.currentPage = "home";
  state.modalUser = null;
};

export const showStateJson = ({ state }) => {
  state.showStateJson = !state.showStateJson;
};

export const showUsersPage = action(
  async ({ value: params, state, effects }) => {
    if (!params.id) state.modalUser = null;
    if (state.users.length) return;

    state.currentPage = "users";
    state.isLoadingUsers = true;
    state.users = await effects.api.getUsers();
    state.isLoadingUsers = false;
  }
);

export const showUserModal = parallel(
  showUsersPage, // BUG this crashes when rendering User & UserModal components
  action(async ({ value: params, state, effects }) => {
    state.currentUserModalTabIndex = Number(params.tab);

    if (state.modalUser && state.modalUser.id === params.id) return;

    state.isLoadingUserDetails = true;
    state.modalUser = await effects.api.getUserWithDetails(params.id);
    state.isLoadingUserDetails = false;
  })
);
