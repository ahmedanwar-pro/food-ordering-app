import Input from "../UI/Input";

export default function MealsSearch({ value, onChange }) {
  return (
    <div className="meals-search">
      <Input
        id="meal-search"
        name="mealSearch"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search by delicious meal"
        autoComplete="off"
      />
    </div>
  );
}
