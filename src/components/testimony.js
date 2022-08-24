import React from 'react'
import { clientdata } from '../clientdata'
import TestimonyCard from './testimonyCard'

const Testimony = () => {
  return (
    <div className='row testimony'  style={{width:"100%"}}>
        <span className="sech1">Our Testimonials</span>
        <span className="sech2">Clients Testimonials</span>
        <div className="col-md-1"></div>
        {clientdata.map((data,key)=>{
            return(
                     <div  className="col-md-3  col-sm-3 testimonycard" >
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
        <div className="col-md-1"></div>

    </div>
  )
}

export default Testimony