import Image from "next/image";
import { Box, Flex, Badge, chakra } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";

const ChakraCloudinaryImage = chakra(CloudinaryImage);
const ChakraNextImage = chakra(Image);

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
        rounded="xl"
        shadow="lg"
        onClick={() => setModalData(product)}
      >
        <Box
          w="100%"
          height="200px"
          position="relative"
          overflow="hidden"
          roundedTop="lg"
        >
          <Image
            src={img}
            objectFit="cover"
            alt="picture of an animal"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        {/* <CloudinaryImage
          alt="picture of an animal"
          responsive
          publicId={img}
          loading="lazy"     
        >
        <Transformation quality={200} width="200" height="200"/>
        </CloudinaryImage>
         */}

        <Box p="6">
          <Box
            mt="3"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>

          <Box>${price}</Box>

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
