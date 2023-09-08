export interface ProductCardType {
    id: string;
    name: string;
    image_url: string;
    price_in_cents: number;
    created_at: string;
    sales: number;
}

export interface ProductInfoType {
    id: string,
    name: string,
    image_url: string,
    price_in_cents: number,
    description: string,
    category: string,
}

export interface ProductLocalStorage {
    id: string,
    quantity: number
}
