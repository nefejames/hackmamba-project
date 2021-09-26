import { Box, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProductCard from "@components/ProductCard";
import DashboardLayout from "@layout/Dashboard";
import data from "@root/data";
import { cardVariant, parentVariant } from "@root/motion";
import ModalProduct from "@components/ModalProduct";
import { useState } from "react";
const MotionSimpleGrid = motion(SimpleGrid);
const MotionBox = motion(Box);

export default function Dashboard() {
  const [modalData, setModalData] = useState(null);
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
            <MotionBox variants={cardVariant} key={product.id}>
              <ProductCard product={product} setModalData={setModalData} />
            </MotionBox>
          ))}
        </MotionSimpleGrid>
        <ModalProduct
          isOpen={modalData ? true : false}
          onClose={() => setModalData(null)}
          modalData={modalData}
        />
      </Box>
    </DashboardLayout>
  );
}
