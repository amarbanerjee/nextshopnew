import ProductDetails from '@/components/home/ProductDetails'
import { useRouter } from 'next/router';
import React from 'react'

export default function ViewProductDetail() {
    const router = useRouter();
   
    const id = router.query.id;

  return (
    <div className="content-area">
       <ProductDetails id={id} />
      
    </div>
  )
}
