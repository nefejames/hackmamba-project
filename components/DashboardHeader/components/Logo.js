import { Flex, Stack, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Stack direction="row" alignItems="center" {...props}>
      <Flex direction="column" lineHeight="5">
        <Text fontSize="lg" fontWeight="semibold" textStyle="default">
          Hackmamba Housing
        </Text>
      </Flex>
    </Stack>
  );
}
