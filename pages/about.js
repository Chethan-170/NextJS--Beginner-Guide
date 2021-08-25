import Head from 'next/head';
import React from 'react'
import get_me_data from './servis/get_me_data';

export default function About({ data }) {
    return (
        <div>
        <Head>
          <title>about</title>
        </Head>
            <h1>about page</h1>
            {data.map(x => <p>{x}</p>)}
            <button onClick={() => {
                fetch("/api/hello");
            }}>click</button>
        </div>
        
    )
}

export async function getServerSideProps() {
    console.log("about", "getServerSideProps");

    return { props: { data: ["hello", "world"], hello: get_me_data() } }
}


// export async function getServerSideProps() {
//     console.log("about", "getServerSideProps");
//     return { props: { data: ["hello", "world"] } }
// }