"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function Header({ cartCount = 0 }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detectar scroll para cambiar el fondo
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white/90 backdrop-blur-md shadow" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" className="h-10" alt="logo" />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-gray-500 transition">Inicio</Link>
          <Link href="/tienda" className="hover:text-gray-500 transition">Tienda</Link>

          {/* CARRITO */}
          <Link href="/carrito" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 group"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition 
            ${open ? "rotate-45 translate-y-1" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition 
            ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition 
            ${open ? "-rotate-45 -translate-y-1" : ""}`}
          />
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md shadow-lg flex flex-col px-4 py-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link href="/tienda" onClick={() => setOpen(false)}>Tienda</Link>

          <Link href="/carrito" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            Carrito
            {cartCount > 0 && (
              <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full ml-auto">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      )}
    </header>
  )
}
