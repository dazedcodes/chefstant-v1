import Head from "next/head";
import Navigation from "./Navigation";

export default function Header({session}) {
    return (
        <>
        <Head>
          <title> Chefstant | a private dining + meal prep delivery app</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation session={session}/>
        </>
    )
}