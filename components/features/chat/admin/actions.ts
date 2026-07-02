import { supabase } from "@/lib/supabase/client";

export const setOnlineStatus = async (isOnline: boolean) => {
  const { error } = await supabase
    .from("presence")
    .update({ is_online: isOnline })
    .eq("id", "admin");

  if (error) console.error("Error updating presence:", error);
};