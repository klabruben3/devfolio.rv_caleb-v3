"use client";

import { useAuthContext, useLoginContext } from "@/context";
import { supabase } from "@/lib/supabase/client";
import { useMediaType } from "@/utils/mediaQuery";

const style = {
  dimensions: {
    phone: "h-[15px] w-[15px]",
    tablet: "h-[30px] w-[30px]",
    desktop: "h-[40px] w-[40px]",
  },
  positions: {
    phone: "-right-[25px] top-[0px]",
    tablet: "-right-[45px] -top-[10px]",
    desktop: "-right-[75px] -top-[15px]",
  },
  border: {
    phone: "border-2",
    tablet: "border-3",
    desktop: "border-3",
  },
};

export default function SignOut() {
  const { isAuth, initialize } = useAuthContext();
  const { showLogin } = useLoginContext();
  const mediaType = useMediaType();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      return;
    }

    await initialize()
  };

  return (
    <>
      {!showLogin && (
        <button
          onClick={() => {
            if (isAuth) handleSignOut();
          }}
          className={`absolute ${style.dimensions[mediaType]} ${style.positions[mediaType]} ${style.border[mediaType]} rounded-full ${isAuth ? "border-gray-500" : "border-primary"} bg-primary active:scale-150 transition-transform duration-200 cursor-pointer`}
        />
      )}
    </>
  );
}
