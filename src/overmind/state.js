// initial state

export const state = {
  currentPage: "home",
  isLoadingUsers: false,
  isLoadingUserDetails: false,
  users: [
  ]
};



/*********************
const mockState = {
  currentPage: "home",
  isLoadingUsers: false,
  isLoadingUserDetails: false,
  user: null,
  users: [
   {
      id: 1,
      name: "Primus Userus",
      details: {
        email: "primus@example.com",
        bio: "clueless monkey",
        address: "nullwhere, IC"
      }
    },
    {
      id: 2,
      name: "Secundus Userus",
      details: {
        email: "secundus@example.com",
        bio: "director of monkey operations",
        address: "fremonk, earth"
      }
    }  
  ],
  modalUser: (state) => state.users[1]
};

// typicode api response:
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
      }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
  }
}
*/