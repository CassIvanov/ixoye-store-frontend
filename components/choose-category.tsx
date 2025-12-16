"use client"

import { useGetCategories } from "@/api/getProducts";
import Link from "next/link"
import { ResponeType } from "@/types/response";
import { CategoryType } from "@/types/category";

const ChooseCategory = () => {
    const { result, loading }: ResponeType = useGetCategories()

    return ( 
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Categorías</h3>

            <div className="grid gap-5 sm:grid-cols-3">
                {!loading && result !== undefined && (
                    result.map((category: CategoryType) => {
                        if (
                            !category ||
                            !category.attributes ||
                            !category.attributes.slug ||
                            !category.attributes.mainImage?.data?.attributes?.url
                        ) return null;

                        const { slug, categoryName, mainImage } = category.attributes;

                        return (
                            <Link
                                key={category.id}
                                href={`/category/${slug}`}
                                className="relative max-w-xd mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                            >
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${mainImage.data.attributes.url}`}
                                    alt={categoryName}
                                    className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                                />
                                <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                                    {categoryName}
                                </p>
                            </Link>
                        )
                    })
                )}
            </div>
        </div>
    );
}

export default ChooseCategory;
