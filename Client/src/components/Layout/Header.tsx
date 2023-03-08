import React from "react";
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { ChatHeaderProps } from "react-chat-engine-advanced";

interface HeaderProps {
  chat: ChatHeaderProps;
}

const Header: React.FC<HeaderProps> = ({ chat }) => {
  const { title, description } = chat;

  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        <h3 className="header-text">{title}</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone" />
        <p className="header-text">
          {description !== "⬅️ ⬅️ ⬅️" ? description : "no chat selected"}
        </p>
      </div>
    </div>
  );
};

export default Header;
