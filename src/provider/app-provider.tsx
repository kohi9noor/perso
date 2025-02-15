"use client";
import { RecoilRoot } from "recoil";
import React from "react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
