import { UserProvider } from "@auth0/nextjs-auth0";
import SidebarContextProvider from "@context/sidebarContext";
import Theme from "theme";

function MyApp({ Component, pageProps }) {
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
        <SidebarContextProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </SidebarContextProvider>
      </Theme>
    </>
  );
}

export default MyApp;
