"use client";

import { useEffect } from "react";

export type DocumentTitleProps = {
  title: string;
};

// TODO: Workaround until nextjs fixes the use of head with client side routing and server side components
export default function DocumentTitle({ title }: DocumentTitleProps) {
  useEffect(() => {
    console.log(title);
    document.title = title;
  });

  return null;
}
