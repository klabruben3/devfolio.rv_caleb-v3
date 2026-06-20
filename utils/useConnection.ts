"use client"
import { useSyncExternalStore } from "react";

type Connection = "online" | "offline";

const listeners = new Set<() => void>();

let connection: Connection =
  typeof navigator === "undefined"
    ? "online"
    : navigator.onLine
      ? "online"
      : "offline";

let initialized = false;

const handleOnline = () =>{
  connection = "online";
  listeners.forEach((l) => l());
}

const handleOffline = () =>{
  connection = "offline";
  listeners.forEach((l) => l());
}

function initialize() {
  if (initialized || typeof window === "undefined") return;

  initialized = true;

  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);
}

function subscribe(listener: () => void) {
  initialize();

  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Connection {
  return connection;
}

function getServerSnapshot(): Connection {
  return "online";
}

export function useConnection() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
