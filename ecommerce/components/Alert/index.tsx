// Components
import { Alert as AlertChakra, AlertIcon } from "@chakra-ui/react";

type PropsTypes = {
  status?: "error" | "success" | "warning" | "info";
  label?: string;
};
const Alert = ({ status, label }: PropsTypes) => {
  return (
    <AlertChakra status={status}>
      <AlertIcon></AlertIcon>
      {label}
    </AlertChakra>
  );
};

export default Alert;
