

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Room = () => {

  const [categories, setCategories] = useState([]);
  /**
   * useEffect diye amra data take load kore nibo */

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>

      <div class="grid grid-rows-3 grid-flow-col gap-4 ">
        <div class="row-span-3 md:row-span-4 ...">
          <div className='m-8 bg-slate-800 p-2'>
            <h2 className='text-blue-300 hover:text-slate-300'>All Room Is Here</h2>
            {/* shob gula room er categories dekhanor jonno amra map korbo  */}

            {
              categories.map(category => <p className=' p-4 hover:text-blue-200  ' key={category.id}>
                {/* alada alada vabe category gula te jawar jonno  */}
                <Link to={`/category/${category.id}`}>{category.name}</Link>

              </p>)

            }

          </div>









        </div>







        <div class="col-span-2 ...">Welcome to Whispering Willow Inn</div>
        <div class="row-span-2 col-span-2 ...">03</div>
      </div>

      <div class="row-span-3 md:row-span-4">

      </div>

    </div>
  );
};

export default Room;