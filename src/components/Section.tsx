import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="p-5 flex w-full">
      <div className="flex bg-white p-3 rounded-lg w-full">{children}</div>
    </section>
  );
}
