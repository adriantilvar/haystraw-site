"use client";

import SideTabGroup from "./sidetab-group.component";

export default function Sidebar({ tabs }: { tabs: any }) {
  return (
    <aside className="w-64 fixed flex flex-col p-2">
      {tabs.map((tabGroup: any, index: number) => {
        return (
          <SideTabGroup
            key={index}
            {...tabGroup}
          />
        );
      })}
    </aside>
  );
}
