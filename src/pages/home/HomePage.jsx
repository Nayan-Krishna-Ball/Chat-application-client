//
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChatArea from "./components/Chat";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";

import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

export default function HomePage() {
  const { selectedChat, user } = useSelector((state) => state.userReducer);

  const [onlineUser, setOnlineUser] = useState([]);

  useEffect(() => {
    if (user) {
      socket.emit("join-room", user._id);
      socket.emit("user-login", user._id);

      socket.on("online-users", (onlineusers) => {
        setOnlineUser(onlineusers);
      });
      socket.on("online-users-updated", (onlineusers) => {
        setOnlineUser(onlineusers);
      });
    }
  }, [user, onlineUser]);

  return (
    <div className="home-page">
      <Header socket={socket} />
      <div className="main-content">
        <SideBar socket={socket} onlineUser={onlineUser} />

        {selectedChat && <ChatArea socket={socket}> </ChatArea>}
      </div>
    </div>
  );
}
