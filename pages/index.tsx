import type { NextPage } from "next";
import {
  Box,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
  toast,
  useToast,
} from "@chakra-ui/react";
import Link from "components/Link/Link";
import Image from "components/Image/Image";
import { FaWifi } from "react-icons/fa";
import Input from "components/Form/Input";
import Button from "components/Button/Button";

const HomePage: NextPage = () => {
  const toast = useToast();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    toast.closeAll();
    toast({
      title: "Card Updated.",
      description: "We've added your card for you.",
      status: "success",
      duration: 8000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="1280px" marginX="auto" p={10}>
      <Header />

      <Flex
        minH="400px"
        gridGap="7rem"
        paddingTop={10}
        borderBottom="1px"
        borderColor="accent.5"
        pb={10}
      >
        <Box width="450px">
          <Heading as="h1" fontSize="2xl" mb={3}>
            Payment Information
          </Heading>

          <Text opacity={0.8} fontSize="sm" mb={10}>
            Choose your method of payment.
          </Text>

          <CardView />
        </Box>

        <Box flex={1}>
          <Flex
            justifyContent="flex-end"
            alignItems="center"
            gridGap={10}
            marginTop={-9}
          >
            <HStack spacing={4} pr={5}>
              <Image h="40px" w="40px" src="/visa-logo.png" alt="visa logo" />

              <Image
                h="40px"
                w="40px"
                src="/discover-logo.png"
                alt="discover logo"
              />
            </HStack>

            <HStack>
              <input type="radio" checked={false} />

              <Image
                h="100px"
                w="100px"
                src="/paypal-logo.png"
                alt="paypal logo"
              />
            </HStack>
          </Flex>

          <Box as="form" onSubmit={handleSubmit}>
            <Grid templateColumns={"1fr 1fr"} gridGap={10} mb={10}>
              <Box>
                <FormLabel htmlFor="cardNumber">Credit card number</FormLabel>
                <Input id="cardNumber" value="4324 5433 9382 1030" />
              </Box>

              <Box>
                <FormLabel htmlFor="expiration-date">Expiration date</FormLabel>
                <Input id="expiration-date" value="03/24" />
              </Box>

              <Box>
                <FormLabel htmlFor="security-code">Security code</FormLabel>
                <Input id="security-code" value="420" />
              </Box>

              <Box>
                <FormLabel htmlFor="postal-code">Postal code</FormLabel>
                <Input id="postal-code" value="10119" />
              </Box>

              <GridItem colSpan={2} d="flex" alignItems="center" gridGap={5}>
                <input id="use-card" type="radio" checked />
                <FormLabel m={0} htmlFor="use-card">
                  Use this card for next time purchase
                </FormLabel>
              </GridItem>
            </Grid>

            <Button type="submit" width="100%">
              Add card
            </Button>
          </Box>
        </Box>
      </Flex>

      <Stack spacing={5} borderBottom="1px" borderColor="accent.5" py={10}>
        <Flex justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">
            Subtotal
          </Text>

          <Text fontSize="xl" fontWeight="bold">
            ₦2,497.00
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">
            Estimated TAX
          </Text>

          <Text fontSize="xl" fontWeight="bold">
            ₦119.64
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">
            Promotional Code:{" "}
            <Text as="span" opacity={0.7}>
              Z4KXLM9A
            </Text>
          </Text>

          <Text fontSize="xl" fontWeight="bold">
            ₦-60.00
          </Text>
        </Flex>
      </Stack>

      <Flex justifyContent="space-between" pt={10}>
        <Button>Complete payment</Button>

        <Text fontSize="2xl" fontWeight="bold">
          TOTAL: ₦2556.64
        </Text>
      </Flex>
    </Box>
  );
};

const CardView = () => {
  return (
    <Box
      data-testid="card-view"
      width="450px"
      height="300px"
      overflow="hidden"
      rounded="lg"
      color="white"
      position="relative"
      paddingY={8}
      style={{
        backgroundImage:
          "linear-gradient(45deg, rgb(208 81 48), rgb(101 78 237))",
      }}
    >
      <Stack paddingLeft={9} spacing={4}>
        <Text fontWeight="600" fontSize="10px" letterSpacing="3px">
          CARD NUMBER
        </Text>
        <Text fontWeight="600" fontSize="13px" letterSpacing="3px">
          4324 5433 9382 1030
        </Text>
      </Stack>

      <Flex alignItems="center">
        <Box transform={"rotate(90deg) translate(5px, -15px)"} fontSize="20px">
          <FaWifi />
        </Box>

        <Image
          h="100px"
          w="100px"
          src="/card-circuit.png"
          alt="card-circuit"
          objectFit="contain"
        />
      </Flex>

      <Stack paddingLeft={9} spacing={3}>
        <Text fontWeight="600" fontSize="10px" letterSpacing="3px">
          EXPIRATION DATE
        </Text>
        <Text fontWeight="600" fontSize="13px" letterSpacing="3px" pb={2}>
          03 / 24
        </Text>

        <Text fontWeight="600" fontSize="14px" letterSpacing="3px">
          John Doe
        </Text>
      </Stack>

      <Image
        h="100px"
        w="100px"
        src="/mastercard-logo.png"
        alt="mastercard-logo"
        position="absolute"
        bottom={0}
        right={8}
      ></Image>
    </Box>
  );
};

const Header = () => {
  const list = [
    { text: "TRIPS" },
    { text: "RECENTLY" },
    { text: "VIEWED BOOKINGS" },
  ];

  return (
    <Flex
      justifyContent="flex-end"
      paddingBottom={20}
      borderBottom="1px"
      borderColor="accent.5"
    >
      <nav>
        <Flex alignItems="center" as="ul" listStyleType={"none"} gridGap="10">
          {list.map((item) => (
            <Box key={item.text} as="li">
              <Link
                display="block"
                padding={3}
                href="#"
                borderBottom="2px"
                borderColor="transparent"
                _hover={{
                  textDecoration: "none",
                  borderColor: "primary.base",
                }}
                _focus={{
                  outline: "none",
                  borderColor: "primary.base",
                }}
                opacity={0.9}
              >
                <Text fontWeight="bold" fontSize="lg">
                  {item.text}
                </Text>
              </Link>
            </Box>
          ))}

          <Link href="#" rounded="full">
            <Image
              h={"50px"}
              w="50px"
              rounded="full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="user-avatar"
            />
          </Link>
        </Flex>
      </nav>
    </Flex>
  );
};

export default HomePage;
