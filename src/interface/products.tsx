// Generated by https://quicktype.io

export interface Products {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    images:      string[];
    creationAt:  string;
    updatedAt:   string;
    category:    Category;
}

export interface Category {
    id:         number;
    name:       Name;
    image:      string;
    creationAt: string;
    updatedAt:  string;
}

export enum Name {
    Electronics = "Electronics",
    Furniture = "Furniture",
    Others = "Others",
    Rohit = "Rohit",
    Shoes = "Shoes",
}