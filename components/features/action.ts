export const requestLogin = async (pin: string) => {
  const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_FUNCTION_URL!, {
    method: "POST",
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_URL!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: pin }),
  });

  const data = await response.json();
  return data.result;
};
