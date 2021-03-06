import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import generateRSSFeed from "../utils/generate-rss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>How to add an RSS feed to a Next.js site in 2 minutes!</h1>
      <Link href="/rss.xml">RSS feed</Link>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = [
    {
      title: "How to use the RSS feed",
      content: "This is how to use the RSS feed.",
      description: "This is how to use the RSS feed.",
      slug: "how-to-use-the-rss-feed",
      publishedAt: "2020-01-01T00:00:00.000Z",
      author: {
        name: "Avneesh Agarwal",
        username: "avneesh",
      },
    },
  ];

  generateRSSFeed(posts);
  return { props: {} };
};
