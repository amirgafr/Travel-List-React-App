import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackegeList";
import Stats from "./State";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handelItems(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelClearItems() {
    setItems([]);
  }

  function handelInputChange(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelItems} />
      <PackingList
        items={items}
        delItems={handelDeleteItem}
        onToggleItem={handelInputChange}
        onClearItems={handelClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
