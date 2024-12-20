import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Component/BottomNav/NavigationBar";

export default function DefaultLayout() {
  return (
    <>
      <Outlet />
      <NavigationBar />
    </>
  );
}
