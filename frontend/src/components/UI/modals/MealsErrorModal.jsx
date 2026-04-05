import Modal from "./Modal";
import Button from "../Button";

export default function MealsErrorModal({
  modalRef,
  message,
  onRetry,
  disableClose,
}) {
  return (
    <Modal ref={modalRef} disableClose={disableClose}>
      <h2>Error</h2>
      <p>{message}</p>

      <div className="modal-actions">
        <Button onClick={onRetry}>Retry</Button>
      </div>
    </Modal>
  );
}
