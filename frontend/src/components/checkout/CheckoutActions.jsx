import Button from "../UI/Button";
import Spinner from "../UI/loading/Spinner";

export default function ChekoutActions({ onBackToCart, isSubmitting }) {
  return (
    <>
      <div className="modal-actions">
        <Button
          type="button"
          textOnly
          onClick={onBackToCart}
          disabled={isSubmitting}
        >
          Back
        </Button>
        <Button disabled={isSubmitting}>
          {isSubmitting && (
            <>
              <Spinner size="1rem" />
              <span style={{ marginLeft: ".5rem" }}>Sending...</span>
            </>
          )}
          {!isSubmitting && "Submit Order"}
        </Button>
      </div>
    </>
  );
}
