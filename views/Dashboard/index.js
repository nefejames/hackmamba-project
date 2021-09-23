import { Box, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProductCard from "@components/ProductCard";
import DashboardLayout from "@layout/Dashboard";
import data from "../../data";
import { cardVariant, parentVariant } from "../../motion";
const MotionSimpleGrid = motion(SimpleGrid);
const MotionBox = motion(Box);

// const MainCloudinaryUrl
export default function Dashboard() {
  return (
    <DashboardLayout>
      <Box>
        <MotionSimpleGrid
          mt="4"
          minChildWidth="250px"
          spacing="2em"
          minH="full"
          variants={parentVariant}
          initial="initial"
          animate="animate"
        >
          {data.map((product) => (
            <MotionBox variants={cardVariant} whileHover={{ scale: 1.1 }}>
              <ProductCard key={product.id} {...product} />
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Box>
    </DashboardLayout>
  );
}
