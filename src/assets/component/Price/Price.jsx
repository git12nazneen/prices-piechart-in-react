import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";


const Price = () => {
    const [prices, setPrice] = useState([])
    useEffect(()=>{
        fetch('/public/fakedata.json')
        .then(res => res.json())
        .then(data => setPrice(data))
    }

    )
    return (
       <div className="m-5">
        <h2 className="text-4xl font-bold text-center p-6">Best prices in the town</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-6">
            {
                prices.map(price => <PriceOption 
                key={price.id}
                price={price}
                ></PriceOption>)
            }
        </div>
       </div>
    );
};

export default Price;