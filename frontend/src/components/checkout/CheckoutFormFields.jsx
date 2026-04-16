import Input from "../UI/Input";
import { useSelector, useDispatch } from "react-redux";
import { checkoutFormActions } from "../../store/checkoutForm/checkoutFormSlice";

export function CheckoutFormFields() {
  const form = useSelector((state) => state.checkoutForm);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(checkoutFormActions.handleFormOnChange({ name, value }));
  }

  return (
    <>
      <Input
        label="Full Name"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        required
      />
      <Input
        label="E-Mail Address"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Street"
        name="street"
        value={form.street}
        onChange={handleChange}
        required
      />
      <div className="control-row">
        <Input
          label="Postal Code"
          name="postalCode"
          value={form.postalCode}
          onChange={handleChange}
          required
        />
        <Input
          label="City"
          name="city"
          value={form.city}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}
