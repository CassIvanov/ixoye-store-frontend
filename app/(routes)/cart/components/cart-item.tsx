/* eslint-disable @next/next/no-img-element */
"use client";

import ProductImageMiniature from "@/components/shared/product-image-miniature";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X, Plus, Minus } from "lucide-react";

interface CartItemProps {
  product: ProductType;
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeItem, updateQuantity } = useCart();

  const quantity = product.quantity || 1;
  const stock = product.stock ?? 0;

  return (
    <li className="flex py-6 border-b">
      <ProductImageMiniature slug={product.slug} url={product.images[0].url} />

      <div className="flex justify-between flex-1 px-6">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold">{product.productName}</h2>
            <p className="font-bold text-green-700">
              {formatPrice(product.price)}
            </p>
          </div>

          <div className="flex items-center gap-3 mt-3 border w-fit rounded-lg p-1 bg-white shadow-sm">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              disabled={quantity <= 1}
              className="p-1 hover:bg-slate-100 rounded-md disabled:opacity-30 transition"
            >
              <Minus size={15} />
            </button>

            <span className="font-bold text-sm min-w-[20px] text-center">
              {quantity}
            </span>

            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              disabled={quantity >= stock}
              className="p-1 hover:bg-slate-100 rounded-md disabled:opacity-30 "
              title={quantity >= stock ? "Límite de stock alcanzado" : ""}
            >
              <Plus size={15} />
            </button>
          </div>

          {quantity >= stock && (
            <p className="text-[13px] text-gray-500 font-medium mt-1">
              Limite de stock alcanzado
            </p>
          )}
        </div>

        <div className="flex flex-col justify-between items-end">
          <button
            onClick={() => removeItem(product.id)}
            className={cn(
              "rounded-full flex items-center justify-center bg-white border shadow-md p-1.5 hover:scale-110 transition text-rose-700"
            )}
          >
            <X size={20} />
          </button>

          <div className="text-right">
            <p className="text-xs">Subtotal</p>
            <p className="font-semibold text-green-700">
              {formatPrice(product.price * quantity)}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
