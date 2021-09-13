import { useEffect } from "react";
import Head from "next/head";
import HomePage from "@views/Home";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/app");
    }
  }, [user, router]);

  return (
    <div>
      <Head>
        <title>Hackmamba PetShop</title>
      </Head>

      <HomePage />
    </div>
  );
}
