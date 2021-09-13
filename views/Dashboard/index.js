import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "@components/ProductCard";
import DashboardLayout from "@layout/Dashboard";
import data from "../../data";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Box>
        <SimpleGrid mt="4" minChildWidth="250px" spacing="2em" minH="full">
          {data.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </SimpleGrid>
      </Box>
    </DashboardLayout>
  );
}
