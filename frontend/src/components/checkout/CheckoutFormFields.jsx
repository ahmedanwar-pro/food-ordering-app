import Input from "../UI/Input";
import handlerActions from "../../util/handlerActions";
import { useSelector } from "react-redux";

export function CheckoutFormFields() {
  const { onChangeFormCheckout } = handlerActions();

  const form = useSelector((state) => state.form);

  return (
    <>
      <Input
        label="Full Name"
        name="fullName"
        value={form.fullName}
        onChange={onChangeFormCheckout}
        required
      />
      <Input
        label="E-Mail Address"
        type="email"
        name="email"
        value={form.email}
        onChange={onChangeFormCheckout}
        required
      />
      <Input
        label="Street"
        name="street"
        value={form.street}
        onChange={onChangeFormCheckout}
        required
      />
      <div className="control-row">
        <Input
          label="Postal Code"
          name="postalCode"
          value={form.postalCode}
          onChange={onChangeFormCheckout}
          required
        />
        <Input
          label="City"
          name="city"
          value={form.city}
          onChange={onChangeFormCheckout}
          required
        />
      </div>
    </>
  );
}
