import { Dispatch, SetStateAction } from "react";

export type VisitorScreen = "setup" | "active";

export interface VisitorChatProp {
  screen: VisitorScreen;
  setScreen: Dispatch<SetStateAction<VisitorScreen>>;
  setShowConsole: Dispatch<SetStateAction<boolean>>;
}
