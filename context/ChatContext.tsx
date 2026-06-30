"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ChatProp {
  currChatId: string;
  setCurrChatId: Dispatch<SetStateAction<string>>;
}

const ChatContext = createContext<ChatProp | undefined>(undefined);

function ChatContextProvider({ children }: { children: ReactNode }) {
  const [currChatId, setCurrChatId] = useState("");

  return (
    <ChatContext.Provider value={{ currChatId, setCurrChatId }}>
      {children}
    </ChatContext.Provider>
  );
}

function useChatContext() {
  const chatContext = useContext(ChatContext);
  if (!chatContext) {
    throw new Error(
      "useChatContext cannot be used out the Chat context provider.",
    );
  }

  return chatContext;
}

export { ChatContextProvider, useChatContext };
