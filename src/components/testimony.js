import React from 'react'
import { clientdata } from '../clientdata'
import TestimonyCard from './testimonyCard'

const Testimony = () => {
  return (
    <div className=' testimony p-4 '  >
      <div className='col-11 row m-auto'>
        <span className="sech1">Our Testimonials</span>
        <span className="sech2">Clients Testimonials</span>

        {clientdata.map((data, key) => {
          return (
            <div className="col-md-9 my-2 col-lg-3 my-4 col-11 testimonycard"  >
              <TestimonyCard
                image={data.photo}
                name={data.name}
                username={data.username}
                remark={data.remark}
                rating={data.rating}
              />
            </div>
          )
        })}


      </div>
    </div>
  )
}

export default Testimony