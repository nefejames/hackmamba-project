import { Box, Flex, Badge, Image, chakra } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Image as CloudinaryImage } from "cloudinary-react";
const ChakraCloudinaryImage = chakra(CloudinaryImage);
export default function ProductCard({ product, setModalData }) {
  const { img, beds, baths, title, price } = product;
  const score = Math.floor(Math.random(5) * 5);
  const reviewCount = Math.floor(Math.random(50) * 50);

  return (
    <Flex
      layerStyle="card"
      w="full"
      h="full"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
    >
      <Box
        w="full"
        h="full"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        onClick={() => setModalData(product)}
      >
        {/* <Image
          src={img}
          h={[40, 60, 80, 150, 200]}
          w="full"
          objectFit="cover"
          roundedTop="lg"
          placeholder="blur"
        /> */}
        <CloudinaryImage
          alt="picture of an animal"
          responsive
          publicId={img}
          loading="lazy"
          quality="auto"
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
                <StarIcon key={i} color={i < score ? "teal.500" : "gray.300"} />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
