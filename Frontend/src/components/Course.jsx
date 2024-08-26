/* eslint-disable no-unused-vars */
import React from 'react'
import list from '../../public/list.json';
import Card from '../components/Card';
import {Link} from 'react-router-dom'
function Course() {
  return (
  <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'> We`re delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
        <p className='mt-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit asperiores quasi minus ea delectus fuga cumque, sequi iusto nostrum repudiandae maiores perferendis. Sapiente ipsum dignissimos itaque officia, incidunt tempore architecto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, minima natus! Eos molestiae aut exercitationem culpa distinctio eum, quia veritatis nostrum aliquam omnis.
        </p>
        <Link to={"/"}>
        <button className="py-2 px-4 mt-6 rounded-md bg-pink-500 text-white hover:bg-pink-700 duration-300">Back</button>
        </Link>
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            list.map((item)=>(
                <Card key={item.id} item={item} />
            ))
        }
       </div>
    </div>
  </>
  )
}

export default Course
