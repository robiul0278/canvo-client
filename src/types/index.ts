export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  basePrice: number;
  category: string | { _id: string; name: string; slug: string };
  tags?: string[];
  images: { url: string; thumbnailUrl: string; isDefault: boolean; order: number }[];
  variations: ProductVariation[];
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isBestseller?: boolean;
  isPublished?: boolean;
  ratings?: { average: number; count: number };
  discountType?: "none" | "percentage" | "flat";
  discountValue?: number;
}

export interface ProductVariation {
  color: string;
  colorHex: string;
  sizes: { size: string; stock: number; priceOverride?: number }[];
  images: { url: string; thumbnailUrl: string; order: number; isDefault: boolean }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  order?: number;
  isVisible?: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "admin" | "moderator" | "user";
  phone?: string;
  addresses?: string[];
}
