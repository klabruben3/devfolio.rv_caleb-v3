export interface Message {
  id: string;
  from: "admin" | "visitor";
  sender: string;
  text: string;
  time?: string;
}
