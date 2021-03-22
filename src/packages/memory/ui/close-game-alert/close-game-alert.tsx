import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface CloseGameAlertProps {
  isOpen?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const CloseGameAlert: React.FC<CloseGameAlertProps> = ({
  isOpen = false,
  onCancel = () => {},
  onConfirm = () => {},
}) => {
  const cancelRef = React.useRef<any>();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onCancel}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            End Game
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You are getting close!
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onCancel}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onConfirm} ml={3}>
              End Game
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
