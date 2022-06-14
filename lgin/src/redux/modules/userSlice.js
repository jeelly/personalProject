import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// //미들웨어
// //login
// export const loginUserDB = (users) => {
//   return async function (dispatch) {
//     // console.log(users.users);
//     await axios
//       .post("http://13.209.64.124/users/login", users.users)
//       .then((response) => {
//         window.alert(response.data.message);
//         const accessToken = response.data.token;
//         setCookie("is_login", `${accessToken}`);
//         const nickname = response.data.nickname;
//         setCookie("nickname", `${nickname}`);
//       })
//       .catch(function (error) {
//         window.alert(error.response.data.errorMessage);
//       });
//   };
// };

const userSlice = createSlice({
  name: "user",
  initialState: {
    //is_login 넣어서 함수,
    list: [],
    //is_login
  },

  reducers: {
    loginUser: (state, action) => {},
    // updateUser(state, action) {},
    // removeUser(state, action) {},
    // saveUser(state, action) {},
  },
});

export const userActions = userSlice.actions;
export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
