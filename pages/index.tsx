import type { NextPage } from "next";
import { Box, Flex, Text } from "@chakra-ui/react";

const HomePage: NextPage = () => {
  return (
    <Box maxLength="700px" mx="auto" p={10}>
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
        <Flex alignItems="center" as="ul">
          {list.map((item) => (
            <Box key={item.text} as="li">
              <Text>{item.text}</Text>
            </Box>
          ))}
        </Flex>
      </nav>
    </Flex>
  );
};

export default HomePage;
