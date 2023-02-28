const INIT_STATE = {
   users: [],
}


export const userreducer = (state = INIT_STATE, action) => {
   switch (action.type) {
      case "USER_DATA":

         console.log(action.payload, '=>')
         return {
            ...state,
            users: [...state.users, action.payload]
         }



      default:
         return state
   }
}