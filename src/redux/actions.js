import axios from "axios";

const serverUrl = "http://localhost:4000/api/v1";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${serverUrl}/login`,
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFailure", payload: error.response.data.message });
  }
};


export const loadUser = () => async (dispatch) => {
  try {
    console.log(`before loadUserRequest is called`);
    dispatch({ type: "loadUserRequest" });
    console.log(`loadUserRequest is called`);

    console.log(await axios.get(`${serverUrl}/me`));
    const { data } = await axios.get(`${serverUrl}/me`);

    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadUserFailure", payload: error.response.data.message });
  }
};


export const register =
  (fname, lname, email, password, confirmPassowrd) => async (dispatch) => {
    try {
      dispatch({ type: "registerRequest" });
      console.log(`register requested`);
      const {data} = await axios.post(
        `http://localhost:4000/api/v1/register`,
        { fname, lname, email, password, confirmPassowrd },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(`register response:`, data); // Log the server response
      dispatch({ type: "registerSuccess", payload: data });
    } catch (error) {
      console.error(`register  error :`, error); // Log the error
      const errorMessage = error.response
        ? error.response.data.message
        : "Unknown error";
      console.log(`Error message:`, errorMessage);

      dispatch({
        type: "registerFailure",
        payload: error.response ? error.response.data.message : "Unknown error",
      });
    }
  };