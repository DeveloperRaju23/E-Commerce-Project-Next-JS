import { useEffect, useState } from "react"


const UseFetchData = () => {
    const [products, setProduct] = useState([])

    useEffect(() =>{
        fetch("allProducts.json")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

  return [ products]
}

export default UseFetchData