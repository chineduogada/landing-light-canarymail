import type { NextPage } from "next";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "components/Link/Link";
import Image from "components/Image/Image";
import { FaWifi } from "react-icons/fa";

const HomePage: NextPage = () => {
  return (
    <Box maxWidth="1280px" marginX="auto" p={10}>
      <Header />

      <Flex minH="400px" gridGap="7rem" paddingTop={10}>
        <Box width="450px">
          <Heading as="h1" fontSize="2xl" mb={3}>
            Payment Information
          </Heading>

          <Text opacity={0.8} fontSize="sm" mb={10}>
            Choose your method of payment.
          </Text>

          <CardView />
        </Box>

        <Box border="1px" flex={1}></Box>
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
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      color="white"
      position="relative"
      paddingY={8}
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
