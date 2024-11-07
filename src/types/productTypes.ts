export type ProductType =  {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export type Product = {
    id: number;
    name: string;
    product_type_id: number;
    created_at: string;
    updated_at: string;
    type: ProductType;
}

export type AllProducts = Product[];

export type AllProductProps = {
    products: AllProducts;
}