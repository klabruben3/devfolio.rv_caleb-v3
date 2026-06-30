import { Message } from "@/components/ui/types";
import { supabase } from "@/lib/supabase/client";

export function relativeTime(date: Date | string): string {
  const now = new Date();
  const then = new Date(date);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}min ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}hr ago`;

  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;

  // Older than a week — show actual date
  return then.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export async function send({ id, from, sender, text }: Message) {
  // 1. Insert the message
  const { error: messageError } = await supabase.from("messages").insert({
    chat_id: id,
    from,
    sender,
    text
  });

  if (messageError) {
    console.error("Message error:", messageError);
    return;
  }

  if (from !== "admin") {
    // 2. Bump the parent chat (last_message + updated_at via trigger)
    const { error: chatError } = await supabase
      .from("chats")
      .update({ last_message: text })
      .eq("id", id);

    if (chatError) {
      console.error("Chat update error:", chatError);
    }
  }
}
