import type { NextPage } from "next";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "components/Link/Link";
import Image from "components/Image/Image";

const HomePage: NextPage = () => {
  return (
    <Box maxWidth="1280px" marginX="auto" p={10}>
      <Header />

      <Flex minH="400px" gridGap="7rem" paddingTop={10}>
        <Box width="400px">
          <Heading as="h1" fontSize="2xl" mb={3}>
            Payment Information
          </Heading>

          <Text opacity={0.8} fontSize="sm" mb={10}>
            Choose your method of payment.
          </Text>

          <Box
            data-testid="card-view"
            border="1px"
            width="400px"
            height="300px"
            overflow="hidden"
            rounded="lg"
          ></Box>
        </Box>

        <Box border="1px" flex={1}></Box>
      </Flex>
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
