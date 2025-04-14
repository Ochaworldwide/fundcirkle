import React, { useState } from "react";
import ProfileDesktop from "./ProfileDesktop";
import EditProfileDesktop from "./EditProfileDesktop";

export default function General() {
  const [edit, setEdit] = useState(false);
  return !edit ? (
    <ProfileDesktop {...{ edit, setEdit }} />
  ) : (
    <EditProfileDesktop {...{ edit, setEdit }} />
  );
}
