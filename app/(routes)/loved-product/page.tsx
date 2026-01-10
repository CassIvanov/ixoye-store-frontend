/* eslint-disable @next/next/no-img-element */
"use client";

import { useLovedProducts } from "@/hooks/use-loved-products";
import LovedItemProduct from "./components/loved-item-product";

export default function Page() {
  const { lovedItems } = useLovedProducts();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      {/* Contenedor Flex para texto a la izquierda e imagen a la derecha */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Lado Izquierdo: Lista de productos */}
        <div className="flex-1 w-full">
          <h1 className="sm:text-2xl font-bold text-sky-900">
            Productos guardados
          </h1>

          <div className="mt-6">
            {lovedItems.length == 0 && (
              <p className="text-sky-600">No hay productos guardados</p>
            )}
            <ul className="divide-y divide-sky-100">
              {lovedItems.map((item) => (
                <LovedItemProduct key={item.id} product={item} />
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden md:block w-full md:w-1/3">
          <div className="bg-sky-50 rounded-2xl overflow-hidden border border-sky-100 aspect-square flex items-center justify-center">
            <img alt="Image" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
