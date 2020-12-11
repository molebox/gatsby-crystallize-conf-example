import React from 'react';

import { gql, useQuery } from '@apollo/client';

const HELLO_QUERY = gql`
    query HelloWorld {
        hello
    }
`;

export default function Index() {
    const {loading, error, data} = useQuery(HELLO_QUERY);
    React.useEffect(() => {
        if (data) {
            console.log({data})
        }
    }, [data])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <h1>boop</h1>
    )
}