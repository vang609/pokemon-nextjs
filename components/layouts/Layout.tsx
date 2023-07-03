import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="en-vang" />
        <meta
          name="description"
          content={`Pokemon Information about ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta
          property="og:title"
          content={`Information about  pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`It is a page about pokemon ${title}`}
        />
        <meta property="og:image" content={`${origin}/imgs/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
