import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../../store/ui/uiSlice";

export default function useSubmitErrorModalRouting({
  submitErrorModalRef,
  closeToBackground,
}) {
  const dispatch = useDispatch();
  const submitErrorMessage = useSelector((state) => state.ui.isErrorSubmit);

  function showSubmitError(message) {
    dispatch(uiActions.isErrorSubmit(message));
    submitErrorModalRef.current?.open();
  }

  function closeSubmitError() {
    submitErrorModalRef.current?.close();
    closeToBackground();
  }

  return {
    showSubmitError,
    closeSubmitError,
    submitErrorMessage,
  };
}

