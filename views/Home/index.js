import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import HomeLayout from "@layout/Home";

export default function Home() {
  return (
    <HomeLayout>
      <Stack
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={["3xl", "4xl", "6xl"]}
          >
            Get your perfect companion{" "}
            <Text as="span" color="blue.500">
              today!
            </Text>
          </Heading>
          <Text color="gray.200" fontSize={["lg"]}>
            Buyng a pet is a big decision, and we are here to help you through
            the process. It's time to add a new love to your family. Discover
            the right pet for you. It's time to find your new best friend.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify="center"
          align="center"
          position="relative"
          w="full"
        >
          <Box
            position="relative"
            height="300px"
            rounded="2xl"
            boxShadow="2xl"
            width="full"
            overflow="hidden"
          >
            <Image
              alt="Hero Image"
              fit="cover"
              align="center"
              w="100%"
              h="100%"
              src=" https://res.cloudinary.com/nefejames/image/upload/q_auto,f_auto,w_auto/v1632501665/Hackmamba/Images/hero.jpg"
            />
          </Box>
        </Flex>
      </Stack>
    </HomeLayout>
  );
}
