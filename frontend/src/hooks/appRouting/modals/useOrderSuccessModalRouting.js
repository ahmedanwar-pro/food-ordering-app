export default function useOrderSuccessModalRouting({
  submitSuccessModalRef,
  closeToBackground,
}) {
  function handleOrderSuccess() {
    closeToBackground();
    submitSuccessModalRef.current?.open();
  }

  function closeSuccess() {
    submitSuccessModalRef.current?.close();
  }

  return {
    handleOrderSuccess,
    closeSuccess,
  };
}
