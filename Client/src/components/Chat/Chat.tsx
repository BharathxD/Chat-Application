import React from "react";

import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

function Chat() {
  const projectID = import.meta.env.PROJECT_ID;
  const username = "TestUser";
  const secret = "123456";
  const chatProps = useMultiChatLogic(projectID, username, secret);
  //   projectId;
  //   username;
  //   secret;
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
      />
    </div>
  );
}

export default Chat;
