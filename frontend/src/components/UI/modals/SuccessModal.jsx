import Modal from "./Modal";
import Button from "../Button";

export default function SuccessModal({ modalRef, onOkay, disableClose }) {
  return (
    <Modal ref={modalRef} disableClose={disableClose}>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <div className="modal-actions">
        <Button onClick={onOkay}>Okay</Button>
      </div>
    </Modal>
  );
}
