import { Button as __Button } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  primary?: boolean;
  navItem?: boolean;
  [x: string]: any;
};

const Button = ({ children, primary, tabItem, ...rest }: Props) => (
  <__Button
    py={8}
    px={10}
    color="white"
    bg="primary.base"
    fontWeight="400"
    _hover={{
      opacity: 0.8,
    }}
    {...rest}
  >
    {children}
  </__Button>
);

export default Button;
