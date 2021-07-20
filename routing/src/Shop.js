import React, { useState, useEffect } from 'react'

function Shop() {

    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/shop/br')
        const items = await data.json();
        console.log(items)
        setItems(items)
    }
    
    return (
        <div>
            Shop
        </div>
    )
}

export default Shop
