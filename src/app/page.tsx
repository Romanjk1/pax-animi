// "use client";

import CategoryList from '@/components/CategoryList'
import ProductList from '@/components/ProductList'
import Skeleton from '@/components/Skeleton'
import Slider from '@/components/Slider'
import { WixClientContext } from '@/context/wixContext'
import { useWixClient } from '@/hooks/useWixClient'
import { wixClientServer } from '@/lib/wixClientServer'
import { Suspense, useContext, useEffect } from 'react'

const HomePage = async () => {
  // TEST (FETCHING ON THE CLIENT COMPONENT)

  // const wixClient = useWixClient()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res)
  //   };

  //   getProducts();
  // }, [wixClient]);

  // TEST (FETCHING ON THE SERVER COMPONENT)

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex items-center mb-[40px]">
          <h2 className="md:text-[30px] text-[18px] flex-grow flex-shrink basis-auto md:mb-[20px] font-bold">
            Featured Products
          </h2>
          <a
            href=""
            className="font-bold underline underline-offset-2 text-black justify-end"
          >
            View all
          </a>
        </div>

        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      {/* <div className="mt-24  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex items-center mb-[40px]">
          <h2 className="text-[30px] flex-grow flex-shrink basis-auto md:mb-[20px] font-bold">
            Categories
          </h2>
          <a
            href=""
            className="font-bold underline underline-offset-2 text-black justify-end"
          >
            View all
          </a>
        </div>

        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div> */}
      {/* <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div> */}
    </div>
  )
}

export default HomePage
