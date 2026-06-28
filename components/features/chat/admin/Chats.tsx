"use client";

import { ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Chat = {
  id: string;
  visitor: string;
  lastMessage: string;
  updatedAt: string;
  unread: boolean;
};

interface ChatsProp{
  action: Dispatch<SetStateAction<boolean>>;
}

const chats: Chat[] = [
  {
    id: "1",
    visitor: "John Doe",
    lastMessage:
      "Hi Caleb, I really like your portfolio and wanted to discuss a freelance opportunity.",
    updatedAt: "2m ago",
    unread: true,
  },
  {
    id: "2",
    visitor: "Sarah Williams",
    lastMessage: "Would you be available for a React contract next month?",
    updatedAt: "18m ago",
    unread: false,
  },
  {
    id: "3",
    visitor: "Michael",
    lastMessage: "Just wanted to ask a question about your final year project.",
    updatedAt: "Yesterday",
    unread: false,
  },
];

export default function Chats({ action: setShowChat } : ChatsProp) {
  return (
    <div className="flex flex-col overflow-y-auto">
      {chats.map((chat) => (
        <button
          key={chat.id}
          type="button"
          onClick={() => setShowChat(true)}
          className="
            group
            relative
            flex
            w-full
            items-center
            gap-4
            border-b
            border-white/5
            px-5
            py-4
            text-left
            transition-all
            duration-200
            hover:bg-white/[0.03]
            cursor-pointer
          "
        >
          {/* unread indicator */}
          {chat.unread && (
            <>
              <span className="absolute left-0 top-0 h-full w-[2px] bg-primary" />

              <span className="h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
            </>
          )}

          {!chat.unread && (
            <span className="h-2.5 w-2.5 rounded-full bg-white/10 shrink-0" />
          )}

          {/* content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <h3
                className="
                  truncate
                  text-sm
                  font-medium
                  text-foreground
                "
              >
                {chat.visitor}
              </h3>

              <span
                className="
                  shrink-0
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-muted-foreground
                "
              >
                {chat.updatedAt}
              </span>
            </div>

            <p
              className="
                mt-1
                truncate
                text-xs
                text-muted-foreground
              "
            >
              {chat.lastMessage}
            </p>
          </div>

          <ChevronRight
            size={15}
            className="
              shrink-0
              text-muted-foreground
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          />
        </button>
      ))}
    </div>
  );
}
