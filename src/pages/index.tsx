import React from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { ISpace } from "../types/ISpace";
import { getData } from "../global/FetchAPI";

export default function Index() {
    const { isLoading, error, data } = 
    useQuery<ISpace, Error>(["spacex"], getData);

    if (isLoading) return <aside>Loading...</aside>;
    if (error) return <p>Error: {error?.message}</p>
    if (!data) return <aside>No data...</aside>;

    return (
        <React.Fragment>
            <h1>Index</h1>
            <h2>{data?.name}</h2>
            <Image 
                src={data?.links.patch.large} 
                alt="patch-image" 
                width={500} 
                height={500} 
            />
        </React.Fragment>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const QClient = new QueryClient();
    await QClient.prefetchQuery<ISpace, Error>(["spacex"], getData);
    return {
        props: {
            dehydratedState: dehydrate(QClient),
        }
    }
};





