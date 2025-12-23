export type StrapiImage = {
  id: number
  url: string
  alternativeText?: string | null
}

export type CategoryType = {
  id: number
  categoryName: string
  slug: string
}

export type ProductType = {
  id: number
  documentId?: string
  productName: string
  slug: string
  description: string
  price: number
  active: boolean
  origin: string
  isFeatured: boolean

  images: StrapiImage[]

  category?: CategoryType | null
}
