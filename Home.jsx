import { useEffect, useState } from "react"

export const Home = () => {

    const [data,setdata] = useState([]);
    const fetchget = async () => {
       try {
        const res = await fetch ('https://fakestoreapi.com/products')
        const data = await res.json()
        setdata(data)
       } catch (error) {
        console.error(error)
       }
    }

    useEffect(()=>{
        fetchget();
    },[])

    return (
        <div>
            <ul>
               { data.map((curElem,index) => {
                    return(
                        <li key={index}>
                            
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}