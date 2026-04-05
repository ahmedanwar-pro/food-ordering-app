import Button from "./Button";
import TrashIcon from "./icons/TrashIcon";
import handlerActions from "../../util/handlerActions";

export default function ItemActions({ item, itemQuantity }) {
  const { id, name, quantity } = item;
  const { addItem, removeItem, removeItemCompletly } = handlerActions();

  return (
    <div className="quantity-controls">
      <Button
        className="remove-item-btn"
        textOnly
        onClick={() => removeItemCompletly(id)}
        aria-label={`Remove ${name}`}
        title="Remove item"
      >
        <TrashIcon size={20} />
      </Button>

      <Button onClick={() => removeItem(id)}>-</Button>

      <span className={itemQuantity ? "quantity-value" : ""}>
        {itemQuantity ?? quantity}
      </span>

      <Button onClick={() => addItem(item)}>+</Button>
    </div>
  );
}
