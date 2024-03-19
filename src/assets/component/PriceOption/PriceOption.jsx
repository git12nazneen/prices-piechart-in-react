
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({price}) => {

    const {name,id,features} = price;
  return (
    <div className=' border border-gray-400 rounded-2xl bg-sky-200  text-center text-black py-5'>
        <h2 className='pt-5'>
            <span className='text-6xl font-extrabold'>{id}</span>
            <span className='text-2xl '>/pr</span>
           
        </h2>
        <h4 className='text-xl py-5 font-bold '>{name}</h4>
       
        {
            features.map((feature,index) => <Feature
            key={index}
            feature={feature}
            ></Feature>)
        }

        <div className='mx-5  my-8'>
        <button className="btn btn-block bg-slate-800 text-white">block</button>
        </div>

    </div>
  )
}

PriceOption.propTypes = {
    price:PropTypes.object
}

export default PriceOption;