import Head from "next/head";
import { Center } from "@chakra-ui/react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Dashboard from "@views/Dashboard/";

export default function App() {
  return (
    <>
      <Head>
        <title>Petshop App</title>
      </Head>
      <Center>
        <Dashboard />
      </Center>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
