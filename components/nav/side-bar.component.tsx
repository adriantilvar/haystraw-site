import { usePathname } from "next/navigation";
import NavTabs from "./nav-tabs.component";

export default function SideBar() {
  return (
    <aside className="flex flex-col">
      <NavTabs />
    </aside>
  );
}
