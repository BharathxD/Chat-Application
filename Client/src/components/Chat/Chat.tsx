import {
  useMultiChatLogic,
  MultiChatWindow,
  MessageFormProps,
} from "react-chat-engine-advanced";
import Header from "../Layout/Header";
import StandardMessageForm from "../MessageForms/StandardMessageForm";

const Chat = () => {
  const projectID = import.meta.env.VITE_PROJECT_ID;
  const username = "test-user";
  const secret = "123456";
  const chatProps = useMultiChatLogic(projectID, username, secret);

  const renderMessageForm = (props: MessageFormProps) => (
    <StandardMessageForm props={props} activeChat={chatProps.chat} />
  );

  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={renderMessageForm}
      />
    </div>
  );
};

export default Chat;
