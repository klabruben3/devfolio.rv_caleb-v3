"use client";

import { useSyncExternalStore } from "react";

type MediaType = "phone" | "tablet" | "desktop";

function getMediaType(): MediaType {
  const width = window.innerWidth;

  if (width < 768) return "phone";
  if (width < 1024) return "tablet";

  return "desktop";
}

// Store value
let mediaType: MediaType =
  typeof window === "undefined" ? "phone" : getMediaType();

// Subscribers
const listeners = new Set<() => void>();

// Prevent multiple resize listeners
let initialized = false;

const handleResize = () => {
  const nextMediaType = getMediaType();

  if (nextMediaType === mediaType) return;

  mediaType = nextMediaType;

  listeners.forEach((listener) => listener());
};

function initialize() {
  if (initialized || typeof window === "undefined") return;

  initialized = true;

  window.addEventListener("resize", handleResize);
}

function subscribe(listener: () => void) {
  initialize();

  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return mediaType;
}

function getServerSnapshot(): MediaType {
  return "phone";
}

export function useMediaType() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
