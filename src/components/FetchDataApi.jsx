import React, { useEffect, useState } from 'react'

const FetchDataApi = () => {
    const [apiData, setapiData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await api.json();

            setapiData(data);
            console.log('my data', data);
        }
        fetchData();
    }, [])

    return (
        <>
        <h2>Fetch Data from Api</h2>
        <div style={{width:'50%', height:'500px', overflow:'auto', background:'grey'}}>{apiData.map((data)=> <div key={data.id}>
            <p>{data.title}</p>
            {/* <span>{data.completed}</span> */}
        </div>)}</div>
        </>
    )
}

export default FetchDataApi