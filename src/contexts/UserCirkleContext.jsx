import React, { createContext, useEffect, useState, useContext } from "react";
import axiosInstance from "../service";
import { ROUTES } from "../constants/routes";


const UserCirkleContext = createContext();

export const UserCirkleProvider = ({ children }) => {
  const [cirkles, setCirkles] = useState([]);

  const fetchCirkles = async () => {
    try {
      const response = await axiosInstance.get(ROUTES.CIRKLE.GET_USER_CIRKLES
      );
      const data = response.data?.data || [];
      setCirkles(data);
      localStorage.setItem("userCirkles", JSON.stringify(data));
      console.log("it is working")
    } catch (error) {
      console.error("Failed to fetch cirkles:", error);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("userCirkles");
    if (stored) {
      setCirkles(JSON.parse(stored));
    } else {
      fetchCirkles();
    }
  }, []);

  return (
    <UserCirkleContext.Provider
      value={{ cirkles, refreshCirkles: fetchCirkles }}
    >
      {children}
    </UserCirkleContext.Provider>
  );
};

export const useUserCirkle = () => useContext(UserCirkleContext);
