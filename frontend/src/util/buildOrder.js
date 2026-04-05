export default function buildOrder({ cartItems, form }) {
  return {
    items: cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    customer: {
      name: form.fullName,
      email: form.email,
      street: form.street,
      "postal-code": form.postalCode,
      city: form.city,
    },
  };
}
