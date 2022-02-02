import type { NextPage } from "next";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "components/Link/Link";
import Image from "components/Image/Image";

const HomePage: NextPage = () => {
  return (
    <Box maxWidth="900px" marginX="auto" p={10}>
      <Header />
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
    <Flex justifyContent="flex-end">
      <nav>
        <Flex alignItems="center" as="ul" listStyleType={"none"} gridGap="10">
          {list.map((item) => (
            <Box key={item.text} as="li">
              <Link
                display="block"
                padding={3}
                href="#"
                _hover={{
                  textDecoration: "none",
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
