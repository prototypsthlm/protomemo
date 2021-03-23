import { useState } from "react";

export const useConfirm = (onConfirm: () => void) => {
  const [open, setAlertOpen] = useState<boolean>(false);

  const setOpen = () => {
    setAlertOpen(true);
  };

  const handleConfirm = () => {
    setAlertOpen(false);
    onConfirm();
  };

  const onCancel = () => {
    setAlertOpen(false);
  };

  return { open, setOpen, handleConfirm, onCancel };
};
