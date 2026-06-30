"use client";

import { useChatContext } from "@/context";
import { supabase } from "@/lib/supabase/client";
import { ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Chat = {
  id: string;
  visitor: string;
  lastMessage: string;
  updatedAt: string;
  visitor_read: boolean;
  admin_read: boolean;
};

interface ChatsProp {
  action: Dispatch<SetStateAction<boolean>>;
}

const chats: Chat[] = [
  {
    id: "1",
    visitor: "John Doe",
    lastMessage:
      "Hi Caleb, I really like your portfolio and wanted to discuss a freelance opportunity.",
    updatedAt: "2m ago",
    visitor_read: true,
    admin_read: false
  },
  {
    id: "2",
    visitor: "Sarah Williams",
    lastMessage: "Would you be available for a React contract next month?",
    updatedAt: "18m ago",
    visitor_read: false,
    admin_read: false
  },
  {
    id: "3",
    visitor: "Michael",
    lastMessage: "Just wanted to ask a question about your final year project.",
    updatedAt: "Yesterday",
    visitor_read: true,
    admin_read: true,
  },
];

export default function Chats({ action: setShowChat }: ChatsProp) {
  const { setCurrChatId } = useChatContext();
  const handleClick = async (chatId: string) => {
    const { error } = await supabase
      .from("chats")
      .update({ admin_read: true })
      .eq("id", chatId);

    if (error) {
      console.log(error);
      return;
    }

    setShowChat(true);
    setCurrChatId(chatId);
  };

  return (
    <div className="flex flex-col overflow-y-auto">
      {chats.map((chat) => (
        <button
          key={chat.id}
          type="button"
          onClick={() => handleClick(chat.id)}
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
          {!chat.admin_read && (
            <>
              <span className="absolute left-0 top-0 h-full w-[2px] bg-primary" />

              <span className="h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
            </>
          )}

          {chat.admin_read && (
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
