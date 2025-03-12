import Echo from "laravel-echo";

import Pusher from "pusher-js";

window.Pusher = Pusher;

export const usePusherHook = () => {
  const token = localStorage.getItem("token");

  const options = {
    broadcaster: "pusher",
    key: "fund-cirkle-key",
    cluster: "mt1",
  };

  const echo = (window.Echo = new Echo({
    ...options,
    wsHost: import.meta.env.VITE_SOCKET_HOST,
    wsPort: 80,
    forceTLS: false,
    disableStats: true,
    enabledTransports: ["ws", "wss"],
    authEndpoint: `${import.meta.env.VITE_API_URL}/broadcasting/auth`,
    auth: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  }));

  // How to listen to channel and events

  // Private notification channel

  // echo.private(`User.${userId}`).notification((data) => {
  //   console.log(data);
  // });


  //Public channel
  // echo.channel(`channelName`).listen(".eventName", (data) => {
  //   // console.log(data);
  // });

};
