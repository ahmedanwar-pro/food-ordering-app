import Modal from "./Modal";
import Button from "../Button";

export default function SubmitErrorModal({
  modalRef,
  message,
  onClose,
  disableClose,
}) {
  return (
    <Modal ref={modalRef} disableClose={disableClose}>
      <h2>Error!</h2>
      <p>{message}</p>
      <div className="modal-actions">
        <Button onClick={onClose}>Okay</Button>
      </div>
    </Modal>
  );
}
