import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>benswanson.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-8 px-2 md:px-0">
        <h1>&#128075; Hi there :)</h1>
        <h2 className="mt-8">this is an h2</h2>
        <p className="mt-8 leading-relaxed">
          My name is Ben. I am a software engineer. Welcome to my website!
        </p>
        <p className="mt-8 leading-relaxed">
          This cozy corner of the internet is intended to serve as a place where
          I can:
        </p>
        <ul className="mt-4 ml-4 list-disc list-inside leading-loose">
          <li>Experiment with new technologies and designs</li>
          <li>
            Document and organize software-related resources I find valuable
          </li>
          <li>
            Create the resources I wish I had when I was learning JavaScript
          </li>
        </ul>
        <p className="mt-8 leading-relaxed">
          This is placeholder text while I figure out what should go here
        </p>
        <p className="mt-8 leading-relaxed">
          This is placeholder text while I figure out what should go here
        </p>
        <p className="mt-16 leading-relaxed">
          This is placeholder text while I figure out what should go here
        </p>
        <p className="mt-16 leading-relaxed">
          This is placeholder text while I figure out what should go here
        </p>
        <p className="mt-16 leading-relaxed">
          This is placeholder text while I figure out what should go here
        </p>
      </div>
    </Layout>
  );
}
