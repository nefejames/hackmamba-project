import Link from "next/link";
import { Box, Flex, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function ProductCard({
  id,
  img,
  beds,
  baths,
  title,
  price,
  score,
  reviewCount,
}) {
  return (
    <Flex
      // bg={useColorModeValue("#F9FAFB", "gray.600")}
      layerStyle="card"
      w="full"
      h="full"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
    >
      <Link href={`listing/${id}`}>
        <Box
          // bg={useColorModeValue("white", "gray.800")}
          w="full"
          h="full"
          borderWidth="1px"
          rounded="lg"
          // borderRadius="lg"
          shadow="lg"
        >
          <Image
            src={img}
            h={[40, 60, 80, 150, 200]}
            w="full"
            objectFit="cover"
            roundedTop="lg"
            placeholder="blur"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {beds} beds &bull; {baths} baths
              </Box>
            </Box>

            <Box
              mt="3"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {title}
            </Box>

            <Box>
              ${price}
              <Box as="span" color="gray.600" fontSize="sm">
                {" "}
                / month
              </Box>
            </Box>

            <Box d="flex" mt="3" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < score ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Flex>
  );
}
