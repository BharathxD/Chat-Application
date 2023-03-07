import React from "react";
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { ChatHeaderProps } from "react-chat-engine-advanced";

type HeaderProps = {
  chat: ChatHeaderProps;
};

const Header: React.FC<HeaderProps> = ({ chat }) => {
  return (
    <div className={"chatHeader"}>
      <div className={"flexBetween"}>
        <ChatBubbleLeftRightIcon className={"icon-chat"} />
        <h3 className={"header-text"}>{chat.title}</h3>
      </div>
      <div className={"flexbetween"}>
        <PhoneIcon className={"icon-phone"} />
        <p className={"header-text"}>{chat.description}</p>
      </div>
    </div>
  );
};

export default Header;
