import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import {
  signOut
} from "firebase/auth";

import { auth } from "../firebase/setup";
import PostPopup from "./PostPopup";

import bell from "../assets/bell.png";
import globe from "../assets/globe.png";
import group from "../assets/group.png";
import clipboard from "../assets/clipboard.png";
import edit from "../assets/edit.png";
import home from "../assets/home.png";
import quora from "../assets/quora.png";
import lens from "../assets/lens.png";
import account from "../assets/account.png";

type searchProp = {
  setSearch: any;
};

const Navbar = ({ setSearch }: searchProp) => {
  const [post, setPost] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between px-6 py-3 shadow-md w-full bg-white">
      {/* Left Icons */}
      <div className="flex items-center gap-5">
        <img src={quora} className="w-24 h-7" />
        <img src={home} className="w-6 h-6 cursor-pointer" />
        <img src={clipboard} className="w-6 h-6 cursor-pointer" />
        <img src={edit} className="w-6 h-6 cursor-pointer" />
        <img src={group} className="w-6 h-6 cursor-pointer" />
        <img src={bell} className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center border px-3 py-1 w-72 rounded-md">
        <img src={lens} className="w-4 h-4" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Quora"
          className="ml-2 w-full outline-none text-sm"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <h1 className="text-sm border rounded-full px-3 py-1">Try Quora+</h1>
        <img src={globe} className="w-5 h-5 cursor-pointer" />
        {auth?.currentUser?.emailVerified ? (
          <Avatar
            round
            size="28"
            className="cursor-pointer"
            name={auth?.currentUser?.email ?? "User"}
          />
        ) : (
          <Avatar
            round
            size="28"
            className="cursor-pointer"
            src={account}
          />
        )}
        <h1
          onClick={() => setPost(true)}
          className="bg-red-700 rounded-full text-sm cursor-pointer text-white px-4 py-1"
        >
          Add question
        </h1>

        {/* Logout Button */}
        {auth?.currentUser && (
          <button
            onClick={handleLogout}
            className="text-sm border border-red-500 text-red-500 px-3 py-1 rounded-full hover:bg-red-50"
          >
            Logout
          </button>
        )}
      </div>

      {post && <PostPopup setPost={setPost} />}
    </div>
  );
};

export default Navbar;
