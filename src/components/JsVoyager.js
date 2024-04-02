import { Voyager } from "graphql-voyager";
import { useState, useEffect } from "react";

export default function JsVoyager(props) {
    const [introspection, setIntrospection] = useState(null);

    useEffect(() => {
        fetchData();
    }, []); // Run only once when component mounts

    const fetchData = async () => {
        try {
            const response = await fetch(props.url);
            const data = await response.json();
            setIntrospection(data);
            console.log("Fetched data:", data);
        } catch (error) {
            console.error('Error fetching introspection:', error);
        }
    };

    console.log("Props URL:", props.url); // Log props.url

    return (
        <div>
            <h2>Graphql Voyager</h2>
            <br></br>
            {introspection && <Voyager introspection={introspection} />}
        </div>
    );
}
