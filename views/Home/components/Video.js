import { Flex, Image, Box, IconButton } from "@chakra-ui/react";
import { PlayIcon } from ".";

export default function Video() {
  return (
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
  );
}
