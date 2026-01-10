/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Store,
  Menu,
  X,
  BaggageClaim,
  Heart,
  UserRound,
} from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cart = useCart();
  const { lovedItems } = useLovedProducts();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iconClass =
    "p-2 rounded-md transition transform hover:scale-110 hover:bg-gray-100";

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300
      ${
        scrolled ? "bg-gray-100/90 backdrop-blur-md shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16 md:h-[82px]">
        {/* SECCIÓN IZQUIERDA: LOGO */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-ixoye.png"
              className="h-10 md:h-15 w-auto object-contain"
              alt="logo"
            />

            <p className="hidden md:block font-extrabold text-sky-700 text-xl mt-2 leading-tight xl:mt-7">
              REFACCIONES DIESEL Y <br className="lg:hidden" /> AGRICOLA IXOYE
            </p>
            <p className="md:hidden font-black text-sky-700 text-lg mt-4">
              REFACCIONES IXOYE
            </p>
          </Link>
        </div>

        {/* LÍNEA DIVISORIA PC */}
        <div className="hidden md:block h-12 border-l border-gray-400/80 mx-4" />

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-4 lg:gap-6 items-center text-sky-700">
          <Link href="/category" aria-label="Tienda" className={iconClass}>
            <Store className="w-8 h-8 lg:w-10 lg:h-10" />
          </Link>

          <Link href="/profile" aria-label="Perfil" className={iconClass}>
            <UserRound className="w-8 h-8 lg:w-10 lg:h-10" />
          </Link>

          <Link
            href="/cart"
            aria-label="Carrito"
            className={`relative ${iconClass}`}
          >
            {cart.items.length === 0 ? (
              <ShoppingCart className="w-8 h-8 lg:w-10 lg:h-10" />
            ) : (
              <div className="flex gap-1 items-center">
                <BaggageClaim
                  strokeWidth={1}
                  className="w-8 h-8 lg:w-10 lg:h-10"
                />
                <span className="text-xs font-bold">{cart.items.length}</span>
              </div>
            )}
          </Link>

          <Link
            href="/loved-product"
            aria-label="Favoritos"
            className={iconClass}
          >
            <Heart
              className={`w-8 h-8 lg:w-10 lg:h-10 cursor-pointer 
              ${lovedItems.length > 0 && "fill-sky-700"}`}
            />
          </Link>
        </nav>

        {/* BOTÓN MENU MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-gray-200/50 transition"
          aria-label="Abrir menú"
        >
          {open ? (
            <X className="w-7 h-7 text-sky-700" />
          ) : (
            <Menu className="w-7 h-7 text-sky-700" />
          )}
        </button>
      </div>

      {/* MENU MOBILE DESPLEGABLE */}
      {open && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-xl flex justify-around py-4 animate-in slide-in-from-top duration-300">
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className={iconClass}
          >
            <UserRound className="w-6 h-6 text-sky-700" />
          </Link>

          <Link
            href="/category"
            onClick={() => setOpen(false)}
            className={iconClass}
          >
            <Store className="w-6 h-6 text-sky-700" />
          </Link>

          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className={`relative ${iconClass}`}
          >
            <ShoppingCart className="w-6 h-6 text-sky-700" />
            {cart.items.length > 0 && (
              <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                {cart.items.length}
              </span>
            )}
          </Link>

          <Link
            href="/loved-product"
            onClick={() => setOpen(false)}
            className={iconClass}
          >
            <Heart
              className={`w-6 h-6 text-sky-700 ${
                lovedItems.length > 0 && "fill-sky-700"
              }`}
            />
          </Link>
        </nav>
      )}
    </header>
  );
}
