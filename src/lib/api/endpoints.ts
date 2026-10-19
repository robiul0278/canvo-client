import { baseApi } from "./baseApi";
import { Product, Category } from "@/types";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<{ products: Product[]; pagination?: { page: number; pages: number; total: number } }, { page?: number; limit?: number; search?: string; category?: string; sort?: string }>({
      query: (params) => ({ url: "/products", params }),
      providesTags: ["Products"],
    }),
    getFeatured: builder.query<{ products: Product[] }, void>({
      query: () => "/products/featured",
      providesTags: ["Products"],
    }),
    getNewArrivals: builder.query<{ products: Product[] }, void>({
      query: () => "/products/new-arrivals",
      providesTags: ["Products"],
    }),
    getProductBySlug: builder.query<{ product: Product }, string>({
      query: (slug) => `/products/${slug}`,
      providesTags: (result, error, slug) => [{ type: "Products", id: slug }],
    }),
  }),
});

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<{ categories: Category[] }, void>({
      query: () => "/categories",
      providesTags: ["Categories"],
    }),
  }),
});

export const frontendContentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getContent: builder.query<{ data: Record<string, unknown> }, string>({
      query: (section) => `/frontend-content/${section}`,
      providesTags: ["FrontendContent"],
    }),
  }),
});

export const { useGetProductsQuery, useGetFeaturedQuery, useGetNewArrivalsQuery, useGetProductBySlugQuery } = productsApi;
export const { useGetCategoriesQuery } = categoriesApi;
export const { useGetContentQuery } = frontendContentApi;
