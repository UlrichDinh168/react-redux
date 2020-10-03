// const createPolicy = (name, amount) => {
//   return {
//     type: 'CREATE_POLICY',
//     payload: {
//       name, amount,
//     },
//   };
// };

// const deletePolicy = (name) => {
//   return {
//     type: 'DELETE_POLICY',
//     payload: {
//       name,
//     },
//   };
// };

// const createClaim = (name, amountToCollect) => {
//   return {
//     type: 'CREATE_CLAIM',
//     payload: {
//       name, amountToCollect,
//     },
//   };
// };

// const claimsHistory = (oldListOfClaims = [], action) => {
//   if (action.type === 'CREATE_CLAIM') {
//     return [...oldListOfClaims, action.payload];
//   }

//   return oldListOfClaims;
// };

// const accounting = (money = 0, action) => {
//   if (action.type === 'CREATE_CLAIM') {
//     return money - action.payload.amountToCollect;
//   } else if (action.type === 'CREATE_POLICY'){
//     return money + action.payload.amount;
//   }

//   return money;
//  }

// const policies = (listOfPolicies = [], action) => {
//   if (action.type === 'CREATE_POLICY') {
//     return [...listOfPolicies, action.payload.name];
//   }
//   if (action.type === 'DELETE_POLICY') {
//     return listOfPolicies.filter((name) => name !== action.payload.name)
//   }

//   return listOfPolicies;
// };

// const { createStore, combineReducers } = Redux;

// const myDepartments = combineReducers({
//   accounting,
//   claimsHistory,
//   policies,
// });

// const store = createStore(myDepartments);

// store.dispatch(createPolicy('Sam', 40));
// store.dispatch(createPolicy('John', 230));
// store.dispatch(createPolicy('Joe', 420));

// store.dispatch(createClaim('Sam', 20));

// store.dispatch(deletePolicy('Sam'));

// console.log(store.getState())
