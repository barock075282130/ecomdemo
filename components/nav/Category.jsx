'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Category = () => {
  const [ open, setOpen ] = useState(false);
  const pathName = usePathname();
  const param = useSearchParams();
  const type = param.get('type')
  const router = useRouter();
  const handleLink = (type) => router.push(`/products/categories?type=${type}`)
  const active = "cursor-default bg-gray-100/50 text-center font-semibold pl-2 py-1 rounded-l-lg duration-300"
  const notActive = "cursor-pointer pl-2 py-1 rounded-l-lg duration-300"
  const openCat = "ml-3 grid gap-2 h-0 hidden"
  const closeCat = "ml-3 grid gap-2 h-34 block"
  const linkData = [{
    link: 'electronics',
    name: 'electronics',
  },{
    link: 'jewelery',
    name: 'jewelery',
  },{
    link: "men's clothing",
    name: "men clothes",
  },{
    link: "women's clothing",
    name: "women clothes",
  },]
  return (
    <>
    {pathName !== '/'&& pathName !== '/carts' &&(
      <aside className='h-full top-14 w-40 fixed text-black shadow-lg'>
        <div className="flex justify-between font-semibold my-3 cursor-pointer mx-3" onClick={()=>setOpen(!open)}>
          <p>Category</p>
          {open ? '-':'+'}
        </div>
        <ul className={open ? openCat : closeCat}>
          {linkData&&linkData.map((data)=>(
            <li 
              onClick={()=> handleLink(data.link)} 
              key={data.name} 
              className={type === data.link ? active : notActive}
            >
              {data.name}
            </li>
          ))}
        </ul>
      </aside>
    )} 
    </>
  )
}

export default Category