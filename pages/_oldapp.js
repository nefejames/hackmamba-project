import Head from "next/head";
import Theme from "theme";
import { LayoutTree } from "@moxy/next-layout";
import MainLayout from "@layout/MainLayout";
import SidebarContextProvider from "@context/sidebarContext";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hackmamba Project</title>
      </Head>
      <Theme>
        <UserProvider>
          <SidebarContextProvider>
            <LayoutTree
              Component={Component}
              pageProps={pageProps}
              defaultLayout={<MainLayout />}
            />
          </SidebarContextProvider>
        </UserProvider>
      </Theme>
    </>
  );
}

export default MyApp;
