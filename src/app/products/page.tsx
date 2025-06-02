"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  description: string;
  stock: number;
  image: string;
}

// Datos de ejemplo
const products: Product[] = [
  {
    id: 1,
    name: "PlayStation 5",
    sku: "PS5-2024",
    price: 499.99,
    description:
      "Consola de última generación con gráficos realistas y carga ultrarrápida",
    stock: 10,
    image: "/ps5.jpg", // Asegúrate de tener esta imagen en tu carpeta public
  },
  // Agrega más productos aquí...
];

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga
  setTimeout(() => setIsLoading(false), 2000);

  return (
    <div className="flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {isLoading
          ? // Skeletons
            Array.from({ length: 8 }).map((_, index) => (
              <Card key={`skeleton-${index}`} className="overflow-hidden">
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[200px] w-full rounded-t-xl" />
                  <div className="p-4 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                </div>
              </Card>
            ))
          : // Cards de productos
            products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative h-[200px]">
                  <img
                    src="https://picsum.photos/200/300"
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-1">
                    SKU: {product.sku}
                  </p>
                  <p className="text-lg font-semibold mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                    {product.description}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      product.stock > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.stock > 0 ? `Stock: ${product.stock}` : "Agotado"}
                  </p>
                </CardContent>
              </Card>
            ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
