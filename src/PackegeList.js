import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  delItems,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItem;
  if (sortBy === "input") sortedItem = items;
  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  // بقارن الحروف قبل ولا بعد
  if (sortBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            prop={item}
            key={item.id}
            delItems={delItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input description</option>
          <option value="packed">Sort by input packed</option>
        </select>
        <button onClick={() => onClearItems()}>Clear List</button>
      </div>
    </div>
  );
}
