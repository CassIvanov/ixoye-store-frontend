import { ProductType } from "@/types/product"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { toast } from "sonner"

interface CartStore {
items: ProductType[]
addItem: (data: ProductType) => void
removeItem: (id: number) => void
removeAll: () => void
}

export const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],

        addItem: (data) => {
                const currentItems = get().items
                const existingItem = currentItems.find(
                (item) => item.id === data.id
                )

        if (existingItem) {
            toast.error("El producto ya existe en el carrito.")
            return
        }

        set({
            items: [...currentItems, data],
        })

        toast.success("Producto agregado al carrito.")
        },

    removeItem: (id) => {
        set({
            items: get().items.filter((item) => item.id !== id),
        })

        toast.info("Producto eliminado del carrito.")
    },

    removeAll: () => {
        set({ items: [] })
        toast.info("Carrito vaciado.")
    },
    }),
    {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
    }
  )
)
