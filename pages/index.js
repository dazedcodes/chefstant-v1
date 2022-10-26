import { getSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import Wrapper from "../components/Layout/Wrapper";

export default function Index({session}){
  return (
      <Wrapper session={session}>
          {
          }
        <h1> chefstant </h1>
        <p> 
            private dining + meal prep delivery app
            {
                session ? <Link href="/dashboard"> Access your dashboard </Link> : <Link href="/auth/login"> Login </Link>
            } 
        </p>
      </Wrapper>
  )
}

export async function getServerSideProps(context) {
    return {props: {session: await getSession(context)}}
}