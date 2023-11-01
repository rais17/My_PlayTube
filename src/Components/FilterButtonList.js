import React from 'react'
import Button from './Button';

const FilterButtonList = ({ButtonList}) => {
 
  return (
    <div className='flex px-2 overflow-x-auto bg-white gap-x-2 dark:bg-black'>
      {
        ButtonList.map((item,index) => <Button key={index} item={item}/>)
      }
    </div>
  )
}

export default FilterButtonList