"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const ReactQuery = ({ children }) => {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ReactQuery;
