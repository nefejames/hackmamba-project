import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { PlayIcon } from "./components";
import HomeLayout from "@layout/Home";

export default function Home() {
  return (
    <HomeLayout>
      <Stack
        align={"center"}
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
            <Text as={"span"} color={"blue.500"}>
              today!
            </Text>
          </Heading>
          <Text color={"gray.200"} fontSize={["lg"]}>
            Buyng a pet is a big decision, and we are here to help you through
            the process. It's time to add a new love to your family. Discover
            the right pet for you. It's time to find your new best friend.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              icon={<PlayIcon w={12} h={12} />}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
            />
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </HomeLayout>
  );
}
