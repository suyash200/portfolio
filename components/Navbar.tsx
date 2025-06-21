"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function NavBar() {
  const navItems = ["Experience", "Projects", "Resume"];

  return (
    <nav className="w-full bg-[var(--background)] border-2 border-[var(--border)] shadow-[var(--shadow)] rounded-[var(--radius-base)]">
      <ul className="flex w-full">
        {navItems.map((item) => (
          <li key={item} className="flex-1">
            <button
              type="button"
              className="
                w-full
                py-3
                border-2 border-[var(--border)]
                bg-[var(--main)]
                text-[var(--foreground)]
                font-heading
                text-xl
                rounded-none
                shadow-[var(--shadow)]
                transition
                hover:shadow-none hover:border-[var(--main)]
                active:translate-x-1 active:translate-y-1
                focus:outline-none focus:ring-2 focus:ring-[var(--main)]
              "
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

