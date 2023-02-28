export const userData = (user) => {
   console.log(user)
   return {
      type: "USER_DATA",
      payload: user
   }
}
