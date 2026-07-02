"use client";

import { useChatContext } from "@/context";
import { supabase } from "@/lib/supabase/client";
import { ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Chat } from "./types";
import { relativeTime } from "../actions";

interface ChatsProp {
  chats: Chat[] | null;
  action: Dispatch<SetStateAction<boolean>>;
}

export default function Chats({ action: setShowChat, chats }: ChatsProp) {
  const { setCurrChatId } = useChatContext();

  if (!chats) return;

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

  console.log(chats[0].updated_at)

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
                {relativeTime(chat.updated_at)}
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
              {chat.last_message}
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
