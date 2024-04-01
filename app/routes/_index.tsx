import React from 'react';
import { Link } from 'react-router-dom';

import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
;
import { Product } from "~/lib/interface";
import { client } from "~/lib/sanity";

interface iAppProps {
  products: Product[];
}

export async function loader({ }: LoaderArgs) {
  const query = `*[_type == 'product']{
    price,
    name,
    slug,
    "imageUrl": image[0].asset->url
  }`;

  const products = await client.fetch(query);

  return json({ products });
}


const IndexPage = () => {
  const { products } = useLoaderData<typeof loader>() as iAppProps;

  return (
    <>
      <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row mt-12">
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="mb-4 font-semibold text-pink-400 md:mb-6 md:text-lg xl:text-xl">
            Welcome to Glamour Threads
          </p>

          <h1 className="text-black mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            We sell the most exclusive and high-quality fashion products for you.

          </p>
          <div>
            <Link
              to="#products"
              className="rounded-lg bg-pink-400 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 md:text-base"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img
            src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Prouct Image"
            className="h-full w-full object-cover object-center"
          />
        </div> */}

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <img
              src={`https://plus.unsplash.com/premium_photo-1673758905772-e9f3ef20b354?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              
              width={500}
              height={500}
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <img
              src={`https://images.unsplash.com/photo-1676219741309-82b6d0462f69?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              
            />
          </div>
        </div>
      </section>

      <section id="products">
        <div className="py-24 sm:py-32 lg:pt-32">
          <div className="mt-6 grid grid-col-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <Link
                key={product.slug.current}
                className="group relative"
                to={`/product/${product.slug.current}`}
              >
                <div className="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={product.imageUrl}
                    alt="Image of Product"
                    className="w-full h-full object-center object-contain"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  $ {product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default IndexPage
