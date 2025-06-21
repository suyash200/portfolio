"use client";


export default function NavBar() {
  const navItems = [{ label: "Experience", link: "/#exp" }, { label: "Projects", link: "/#projects" }, { label: "Resume", link: "/#Resume" }];


  return (
    <nav className="w-full bg-[var(--background)] border-2 border-[var(--border)] shadow-[var(--shadow)] rounded-[var(--radius-base)] ">
      <ul className="flex w-full">
        {navItems.map((item, i) => (
          <li key={i} className="flex-1">
            <a href={`${item.link}`} className="scroll-smooth">
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
                onClick={() => {

                }}            >
                {item.label}
              </button>

            </a>


          </li>
        ))}
      </ul>
    </nav >
  );
}

