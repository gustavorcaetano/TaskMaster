export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    totalAmount: number;
}

export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    totalAmount: number;
    orderDate: string;
}