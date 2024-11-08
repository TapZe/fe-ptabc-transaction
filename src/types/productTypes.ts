export type ProductType =  {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export type AllProductTypes = ProductType[];

export type AllProductTypeProps = {
    productTypes: AllProductTypes;
    refetch: () => void;
}

export type Stock = {
    id: number;
    quantity: number;
    product_id: number;
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
    stock: Stock;
}

export type ProductProps = {
    product: Product;
    refetch: () => void;
}

export type AllProducts = Product[];

export type AllProductProps = {
    products: AllProducts;
    refetch: () => void;
}

export type ProductMutationResponse = {
    message?: string;
    product?: Product;
}

export type AddProductParams = {
    name: string; 
    stock?: number; 
    product_type_id?: number; 
    product_type_name?: string; 
}

export type UpdateProductParams = {
    name?: string;
    stock?: number;
    product_type_id?: number; 
    product_type_name?: string; 
    id: number;
}