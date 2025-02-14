import { createContext, useEffect, useState } from "react";
import axiosInstance from "../service";
import { ROUTES } from "../constants/routes";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const fetchUserData = async () => {
    try{
        const response = await axiosInstance.get(
            ROUTES.ACCOUNT.GET_USER_ACCOUNT
        );
        setUser(response.data.data);
    }catch(error){
        console.error(error.message);
    }
  };


  const refetchUser = () => fetchUserData()

  useEffect(() => {
        fetchUserData()

  },[]);

  return (
    <UserContext.Provider value={{ user, setUser, refetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
