import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "../Layout/Header";
import StandardMessageForm from "../MessageForms/StandardMessageForm";

const Chat = () => {
  const projectID = import.meta.env.VITE_PROJECT_ID;
  const username = "TestUser";
  const secret = "123456";
  const chatProps = useMultiChatLogic(projectID, username, secret);
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
};

export default Chat;
