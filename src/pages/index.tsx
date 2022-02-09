import React from "react";
import Image from "next/image";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { ISpace } from "../types/ISpace";
import { getData } from "../global/FetchAPI";

export default function Index(): JSX.Element {
    const { isLoading, isFetching, data } = 
    useQuery("spacex", getData);

    if (isLoading) return <aside>Loading...</aside>;
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

export async function getStaticProps() {
    const QClient = new QueryClient();
    await QClient.prefetchQuery<ISpace>("spacex", getData);
    return {
        props: {
            dehydratedState: dehydrate(QClient),
        }
    }
};

// export default Index



