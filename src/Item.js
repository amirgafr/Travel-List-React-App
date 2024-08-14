export default function Item({ prop, delItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={prop.packed}
        onChange={() => onToggleItem(prop.id)}
      />
      <span style={prop.packed ? { textDecoration: "line-through" } : {}}>
        {prop.quantity} {prop.description}
      </span>
      <button onClick={() => delItems(prop.id)}>❌</button>
    </li>
  );
}
