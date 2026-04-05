import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(
  { children, disableClose = false },
  ref,
) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
    close() {
      dialogRef.current.close();
    },
  }));

  // prevent closing the dialogue when disableClose is true (block ESC default behavior).
  function handlePreventClose(event) {
    if (disableClose) {
      event.preventDefault();
    }
  }

  // handle Clicks on outside modal content.
  // closes the dialogue only if user clicks directly on the <dialogue> element.
  // Does nothing when disableClose is enabled.
  function handleBackdrop(e) {
    if (disableClose) return;
    if (e.target === dialogRef.current) {
      dialogRef.current.close();
    }
  }

  function handleClose() {
    dialogRef.current.close();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="modal"
      onCancel={handlePreventClose}
      onClick={handleBackdrop}
    >
      {!disableClose && (
        <button
          className="modal-close"
          onClick={handleClose}
          aria-label="Close dialog"
        >
          ✕
        </button>
      )}

      {children}
    </dialog>,
    document.getElementById("modal"),
  );
});

export default Modal;
