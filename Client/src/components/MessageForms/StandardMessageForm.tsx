import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { FormEvent, useState } from "react";
import { ChatObject, MessageFormProps } from "react-chat-engine-advanced";

type Props = {
  props: MessageFormProps;
  activeChat: ChatObject | undefined;
};

const StandardMessageForm: React.FC<Props> = ({ props, activeChat }) => {
  const [message, setMessage] = useState<string>("");
  const [attachment, setAttachment] = useState<string>("");
  const [preview, setPreview] = useState<string>("");
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
      </div>
    </div>
  );
};

export default StandardMessageForm;
