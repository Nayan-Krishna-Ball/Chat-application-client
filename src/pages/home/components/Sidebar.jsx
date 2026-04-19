//

import { useState } from "react";
import Search from "./Search";
import UserList from "./UserList";

export default function SideBar({ socket, onlineUser }) {
  const [searchKey, setSearchKey] = useState("");
  return (
    <div className="app-sidebar">
      {/* <!--SEARCH USER--> */}
      <Search searchKey={searchKey} setSearchKey={setSearchKey} />
      {/* <!--USER LIST--> */}
      <UserList searchKey={searchKey} socket={socket} onlineUser={onlineUser} />
    </div>
  );
}
