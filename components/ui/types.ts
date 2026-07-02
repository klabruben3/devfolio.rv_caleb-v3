export interface Message {
  id?: string;
  chat_id: string;
  from: "admin" | "visitor";
  sender: string;
  text: string;
  time?: string;
}
