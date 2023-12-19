'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/products')
  },[])
  return (
    <div className="pt-16">
      <div className='flex justify-center items-center p-4'>
        Home Page
      </div>
    </div>
  );
}
