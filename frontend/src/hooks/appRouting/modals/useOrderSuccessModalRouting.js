export default function useOrderSuccessModalRouting({
  successModalRef,
  closeToBackground,
}) {
  function handleOrderSuccess() {
    closeToBackground();
    successModalRef.current?.open();
  }

  function closeSuccess() {
    successModalRef.current?.close();
  }

  return {
    handleOrderSuccess,
    closeSuccess,
  };
}

