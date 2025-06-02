"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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

const products: Product[] = [
  {
    id: 1,
    name: "PlayStation 5",
    sku: "PS5-2024",
    price: 499.99,
    description:
      "Consola de última generación con gráficos realistas y carga ultrarrápida",
    stock: 10,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Xbox Series X",
    sku: "XBX-2024",
    price: 499.99,
    description: "La consola Xbox más potente con 4K real y hasta 120 FPS",
    stock: 5,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Nintendo Switch OLED",
    sku: "NSW-OLED-2024",
    price: 349.99,
    description: "Pantalla OLED de 7 pulgadas con colores vibrantes",
    stock: 15,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "DualSense PS5",
    sku: "DS-PS5-2024",
    price: 69.99,
    description: "Control inalámbrico con retroalimentación háptica",
    stock: 20,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Logitech G Pro X",
    sku: "LOG-GPX-2024",
    price: 129.99,
    description: "Auriculares gaming profesionales con sonido envolvente 7.1",
    stock: 8,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    name: "Razer BlackWidow V3",
    sku: "RZ-BW3-2024",
    price: 139.99,
    description: "Teclado mecánico gaming con switches Razer Green",
    stock: 12,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    name: "The Legend of Zelda: TOTK",
    sku: "ZELDA-TOTK-2024",
    price: 59.99,
    description: "La última aventura épica de Link en Hyrule",
    stock: 0,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    name: "God of War Ragnarök",
    sku: "GOW-RAG-2024",
    price: 69.99,
    description: "Kratos y Atreus se enfrentan al Ragnarök",
    stock: 25,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 9,
    name: "Gaming Chair Pro",
    sku: "GCH-PRO-2024",
    price: 299.99,
    description: "Silla gaming ergonómica con soporte lumbar",
    stock: 6,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 10,
    name: "RTX 4080",
    sku: "RTX-4080-2024",
    price: 799.99,
    description: "Tarjeta gráfica de última generación para gaming 4K",
    stock: 3,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 11,
    name: "Gaming Monitor 27\"",
    sku: "MON-27-2024",
    price: 399.99,
    description: "Monitor gaming 1440p 165Hz con G-Sync",
    stock: 7,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 12,
    name: "Final Fantasy XVI",
    sku: "FF16-2024",
    price: 69.99,
    description: "La nueva entrega de la saga Final Fantasy",
    stock: 18,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 13,
    name: "Gaming Mouse Pro",
    sku: "GMP-2024",
    price: 79.99,
    description: "Ratón gaming con 25.600 DPI y 8 botones programables",
    stock: 0,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 14,
    name: "Steam Deck",
    sku: "STM-DCK-2024",
    price: 399.99,
    description: "PC gaming portátil compatible con Steam",
    stock: 4,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 15,
    name: "Gaming Desk RGB",
    sku: "GD-RGB-2024",
    price: 199.99,
    description: "Escritorio gaming con iluminación RGB y gestión de cables",
    stock: 9,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 16,
    name: "Streaming Kit Pro",
    sku: "STR-KIT-2024",
    price: 249.99,
    description: "Kit completo para streaming con micrófono y capture card",
    stock: 11,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 17,
    name: "RGB Mousepad XL",
    sku: "RGB-PAD-2024",
    price: 29.99,
    description: "Alfombrilla gaming XL con iluminación RGB",
    stock: 30,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 18,
    name: "Mario Kart 8 Deluxe",
    sku: "MK8-DX-2024",
    price: 59.99,
    description: "El juego de carreras más divertido de Nintendo",
    stock: 22,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 19,
    name: "Gaming Headset Stand",
    sku: "GHS-2024",
    price: 24.99,
    description: "Soporte para auriculares con USB hub y RGB",
    stock: 15,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 20,
    name: "Spider-Man 2",
    sku: "SPM2-2024",
    price: 69.99,
    description: "La última aventura de Spider-Man en PS5",
    stock: 0,
    image: "https://picsum.photos/200/300",
  },
];

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Simular carga
  setTimeout(() => setIsLoading(false), 2000);

  // Filtrar productos basado en el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-lg">
        <Input
          type="search"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
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
            filteredProducts.map((product) => (
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

      {!isLoading && filteredProducts.length === 0 && (
        <div className="text-center text-gray-500">
          No se encontraron productos que coincidan con la búsqueda
        </div>
      )}

      {!isLoading && filteredProducts.length > 0 && (
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
      )}
    </div>
  );
}
