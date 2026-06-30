"use client";

import { useAuthContext, useLoginContext } from "@/context";
import { supabase } from "@/lib/supabase/client";

export default function SignOut() {
  const { isAuth } = useAuthContext();
  const { showLogin } = useLoginContext();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      return;
    }
  };

  return (
    <>
      {!showLogin && (
        <button
          onClick={() => {
            if (isAuth) handleSignOut();
          }}
          className={`relative -right-[130px] -top-[40px] h-[50px] w-[50px] rounded-full border-2 ${isAuth ? "border-gray-500" : "border-primary"} bg-primary`}
        />
      )}
    </>
  );
}
