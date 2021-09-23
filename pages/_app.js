import { UserProvider } from "@auth0/nextjs-auth0";
import SidebarContextProvider from "@context/sidebarContext";
import { ScaleFade } from "@chakra-ui/react";
import Theme from "theme";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <Theme>
        <ScaleFade key={router.route} initialScale="0.9" in="true">
          <SidebarContextProvider>
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </SidebarContextProvider>
        </ScaleFade>
      </Theme>
    </>
  );
}

export default MyApp;
