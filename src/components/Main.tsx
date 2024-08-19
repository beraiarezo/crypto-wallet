import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="pl-64 flex min-h-screen flex-col items-center justify-start p-0 bg-gray flex-1">
      {children}
    </main>
  );
}
