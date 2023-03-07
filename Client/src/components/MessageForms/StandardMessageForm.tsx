import {
  PaperAirplaneIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { url } from "inspector";
import React, { FormEvent, Fragment, useState } from "react";
import {
  AttachmentObject,
  ChatObject,
  MessageFormProps,
  MessageObject,
} from "react-chat-engine-advanced";
import Dropzone from "react-dropzone";

type Props = {
  props: MessageFormProps;
  activeChat: ChatObject | undefined;
};

const StandardMessageForm: React.FC<Props> = ({ props, activeChat }) => {
  const [message, setMessage] = useState<string>("");
  const [attachment, setAttachment] = useState<string | File>("");
  const [preview, setPreview] = useState<string>("");
  if (!activeChat) {
    return <h1>Error</h1>;
  }
  const submitHandler = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000) + "00:00"}`);
    const attachmentFile = attachment
      ? [
          {
            id: Math.random(),
            blob: attachment as File,
            file: (attachment as File).name,
            created: date,
          },
        ]
      : [];
    const form: MessageObject = {
      attachments: attachmentFile,
      created: date,
      sender_username: props.username || "undefined",
      text: message,
      activeChatId: activeChat.id,
    };
    props.onSubmit(form);
  };
  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            className="message-form-preview-image"
            alt="message-form-preview"
            src={preview}
            onLoad={
              () => URL.revokeObjectURL(preview)
              // Free up resources when you don't need the image anymore
            }
          />
          <XMarkIcon
            className="message-form-icon-x"
            onClick={() => {
              setPreview("");
              setAttachment("");
            }}
          />
        </div>
      )}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
            className="message-form-input"
            type="text"
            value={message}
            onChange={(e: FormEvent) =>
              setMessage((e.target as HTMLInputElement).value)
            }
            placeholder="Message..."
          />
        </div>
        <div className="message-form-icons">
          <Dropzone
            multiple={false}
            noClick={true}
            onDrop={(acceptedFiles: any) => {
              setAttachment(acceptedFiles[0]);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps, open }) => (
              <Fragment>
                <div {...getRootProps()} />
                <div {...getInputProps()} />
                <PaperClipIcon
                  className="message-form-icon-clip"
                  onClick={open}
                />
              </Fragment>
            )}
          </Dropzone>
          <hr className="vertical-line" />
          <PaperAirplaneIcon
            className="message-form-icon-airplane"
            onClick={() => {
              setPreview("");
              // Clearing the preview on submit
              submitHandler();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StandardMessageForm;
