"use client";

import { useAuthContext, useLoginContext } from "@/context";
import { supabase } from "@/lib/supabase/client";

export default function AuthBtn() {
  const { isAuth } = useAuthContext();
  const { showLogin, setShowLogin } = useLoginContext();
  

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      return;
    }
  };

  const handleShowLogin = () => setShowLogin(true);

  const currentAction = isAuth ? handleSignOut : handleShowLogin;

  return (
    <>
      {!showLogin && (
        <button
          onClick={currentAction}
          className={`absolute right-[500px] top-[300px] z-50 h-[50px] w-[50px] rounded-full border-2 ${isAuth ? "border-gray-500" : "border-primary"} bg-primary`}
        />
      )}
    </>
  );
}
