import { Input as __Input } from "@chakra-ui/react";
import { forwardRef, LegacyRef } from "react";

type Props = {
  [x: string]: any;
};

const Input = forwardRef(({ ...rest }: Props, ref) => (
  <__Input
    size="lg"
    bg="accent.1"
    rounded="4px"
    _focus={{
      outline: "none",
      bg: "white",
    }}
    ref={ref as LegacyRef<HTMLInputElement> | undefined}
    {...rest}
  />
));

Input.displayName = "Input";

export default Input;
