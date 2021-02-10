# overmind.js "state-first" routing demo

for overmind v15.1.2 & react v16.8.1

[codesandbox demo](https://codesandbox.io/s/github/100ideas/overmind-routing-demo/tree/codesandbox_v1)

in case of problems w/ master, check the [`codesandbox_v1`](https://github.com/100ideas/overmind-routing-demo/tree/codesandbox_v1) branch, it is stable.

---

> With Overmind you can use whatever routing solution your selected view layer provides. This will most likely intertwine routing state with your component state, which is something Overmind would discourage, but you know… whatever you feel productive in, you should use :-) In this guide we will look into how you can separate your router from your components and make it part of your application state instead. This is more in the spirit of Overmind and throughout this guide you will find benefits of doing it this way.
> 
> We are going to use PAGE JS as the router and we will look at a complex routing example where we open a page with a link to a list of users. When you click a user in the list we will show that user in a modal with the url updating to the id of the user. In addition we will present a query parameter that reflects the current tab inside the modal.
>
> We will start with a simple naive approach and then we are going to tweak our approach a little bit for the optimal solution.
> 
> https://www.overmindjs.org/guides/intermediate/02_routing?view=react&typescript=false
