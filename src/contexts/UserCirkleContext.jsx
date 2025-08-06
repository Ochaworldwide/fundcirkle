// import React, { createContext, useEffect, useState, useContext } from "react";
// import axiosInstance from "../service";
// import { ROUTES } from "../constants/routes";


// const UserCirkleContext = createContext();

// export const UserCirkleProvider = ({ children }) => {
//   const [cirkles, setCirkles] = useState([]);

//   const fetchCirkles = async () => {
//     try {
//       const response = await axiosInstance.get(ROUTES.CIRKLE.GET_USER_CIRKLES
//       );
//       const data = response.data?.data || [];
//       setCirkles(data);
//       localStorage.setItem("userCirkles", JSON.stringify(data));
//       // console.log("it is working")
//     } catch (error) {
//       console.error("Failed to fetch cirkles:", error);
//     }
//   };

//   useEffect(() => {
//     const stored = localStorage.getItem("userCirkles");
//     if (stored) {
//       setCirkles(JSON.parse(stored));
//     } else {
//       fetchCirkles();
//     }
//   }, []);

//   return (
//     <UserCirkleContext.Provider
//       value={{ cirkles, refreshCirkles: fetchCirkles }}
//     >
//       {children}
//     </UserCirkleContext.Provider>
//   );
// };

// export const useUserCirkle = () => useContext(UserCirkleContext);









import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../service";
import { ROUTES } from "../constants/routes";

const UserCirkleContext = createContext();

const fetchCirkles = async () => {
  const response = await axiosInstance.get(ROUTES.CIRKLE.GET_USER_CIRKLES);
  return response.data?.data || [];
};

export const UserCirkleProvider = ({ children }) => {
  const {
    data: cirkles = [],
    refetch: refreshCirkles,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userCirkles"],
    queryFn: fetchCirkles,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
  });

  return (
    <UserCirkleContext.Provider
      value={{ cirkles, refreshCirkles, isLoading, isError, error }}
    >
      {children}
    </UserCirkleContext.Provider>
  );
};

export const useUserCirkle = () => useContext(UserCirkleContext);
