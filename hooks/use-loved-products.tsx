import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { ProductType } from "@/types/product"
import { toast } from "sonner"

interface UseLovedProductsType {
  lovedItems: ProductType[]
  addLovedItem: (data: ProductType) => void
  removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(
  persist<UseLovedProductsType>(
    (set, get) => ({
      lovedItems: [],

      addLovedItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        )

        if (existingItem) {
          toast.error("El producto ya está guardado.")
          return
        }

        set({
          lovedItems: [...currentLovedItems, data],
        })

        toast.success("Producto guardado.")
      },

      removeLovedItem: (id: number) => {
        set({
          lovedItems: get().lovedItems.filter((item) => item.id !== id),
        })

        toast.info("Producto eliminado de la lista.")
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
