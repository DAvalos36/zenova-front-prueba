"use client";
import { useState, useEffect, useRef } from "react";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  description: string;
  stock: number;
  images: string[];
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
    images: [
      "https://picsum.photos/seed/ps5-1/400/300",
      "https://picsum.photos/seed/ps5-2/400/300",
      "https://picsum.photos/seed/ps5-3/400/300",
    ],
  },
  {
    id: 2,
    name: "Xbox Series X",
    sku: "XBX-2024",
    price: 499.99,
    description: "La consola Xbox más potente con 4K real y hasta 120 FPS",
    stock: 5,
    images: [
      "https://picsum.photos/seed/xbox-1/400/300",
      "https://picsum.photos/seed/xbox-2/400/300",
      "https://picsum.photos/seed/xbox-3/400/300",
    ],
  },
  {
    id: 3,
    name: "Nintendo Switch OLED",
    sku: "NSW-OLED-2024",
    price: 349.99,
    description: "Pantalla OLED de 7 pulgadas con colores vibrantes",
    stock: 15,
    images: [
      "https://picsum.photos/seed/switch-1/400/300",
      "https://picsum.photos/seed/switch-2/400/300",
      "https://picsum.photos/seed/switch-3/400/300",
    ],
  },
  {
    id: 4,
    name: "DualSense PS5",
    sku: "DS-PS5-2024",
    price: 69.99,
    description: "Control inalámbrico con retroalimentación háptica",
    stock: 20,
    images: [
      "https://picsum.photos/seed/ds5-1/400/300",
      "https://picsum.photos/seed/ds5-2/400/300",
      "https://picsum.photos/seed/ds5-3/400/300",
    ],
  },
  {
    id: 5,
    name: "Logitech G Pro X",
    sku: "LOG-GPX-2024",
    price: 129.99,
    description: "Auriculares gaming profesionales con sonido envolvente 7.1",
    stock: 8,
    images: [
      "https://picsum.photos/seed/logitech-1/400/300",
      "https://picsum.photos/seed/logitech-2/400/300",
      "https://picsum.photos/seed/logitech-3/400/300",
    ],
  },
  {
    id: 6,
    name: "Razer BlackWidow V3",
    sku: "RZ-BW3-2024",
    price: 139.99,
    description: "Teclado mecánico gaming con switches Razer Green",
    stock: 12,
    images: [
      "https://picsum.photos/seed/razer-1/400/300",
      "https://picsum.photos/seed/razer-2/400/300",
      "https://picsum.photos/seed/razer-3/400/300",
    ],
  },
  {
    id: 7,
    name: "The Legend of Zelda: TOTK",
    sku: "ZELDA-TOTK-2024",
    price: 59.99,
    description: "La última aventura épica de Link en Hyrule",
    stock: 0,
    images: [
      "https://picsum.photos/seed/zelda-1/400/300",
      "https://picsum.photos/seed/zelda-2/400/300",
      "https://picsum.photos/seed/zelda-3/400/300",
    ],
  },
  {
    id: 8,
    name: "God of War Ragnarök",
    sku: "GOW-RAG-2024",
    price: 69.99,
    description: "Kratos y Atreus se enfrentan al Ragnarök",
    stock: 25,
    images: [
      "https://picsum.photos/seed/gow-1/400/300",
      "https://picsum.photos/seed/gow-2/400/300",
      "https://picsum.photos/seed/gow-3/400/300",
    ],
  },
  {
    id: 9,
    name: "Gaming Chair Pro",
    sku: "GCH-PRO-2024",
    price: 299.99,
    description: "Silla gaming ergonómica con soporte lumbar",
    stock: 6,
    images: [
      "https://picsum.photos/seed/chair-1/400/300",
      "https://picsum.photos/seed/chair-2/400/300",
      "https://picsum.photos/seed/chair-3/400/300",
    ],
  },
  {
    id: 10,
    name: "RTX 4080",
    sku: "RTX-4080-2024",
    price: 799.99,
    description: "Tarjeta gráfica de última generación para gaming 4K",
    stock: 3,
    images: [
      "https://picsum.photos/seed/rtx4080-1/400/300",
      "https://picsum.photos/seed/rtx4080-2/400/300",
      "https://picsum.photos/seed/rtx4080-3/400/300",
    ],
  },
  {
    id: 11,
    name: 'Gaming Monitor 27"',
    sku: "MON-27-2024",
    price: 399.99,
    description: "Monitor gaming 1440p 165Hz con G-Sync",
    stock: 7,
    images: [
      "https://picsum.photos/seed/monitor-1/400/300",
      "https://picsum.photos/seed/monitor-2/400/300",
      "https://picsum.photos/seed/monitor-3/400/300",
    ],
  },
  {
    id: 12,
    name: "Final Fantasy XVI",
    sku: "FF16-2024",
    price: 69.99,
    description: "La nueva entrega de la saga Final Fantasy",
    stock: 18,
    images: [
      "https://picsum.photos/seed/ff16-1/400/300",
      "https://picsum.photos/seed/ff16-2/400/300",
      "https://picsum.photos/seed/ff16-3/400/300",
    ],
  },
  {
    id: 13,
    name: "Gaming Mouse Pro",
    sku: "GMP-2024",
    price: 79.99,
    description: "Ratón gaming con 25.600 DPI y 8 botones programables",
    stock: 0,
    images: [
      "https://picsum.photos/seed/mouse-1/400/300",
      "https://picsum.photos/seed/mouse-2/400/300",
      "https://picsum.photos/seed/mouse-3/400/300",
    ],
  },
  {
    id: 14,
    name: "Steam Deck",
    sku: "STM-DCK-2024",
    price: 399.99,
    description: "PC gaming portátil compatible con Steam",
    stock: 4,
    images: [
      "https://picsum.photos/seed/deck-1/400/300",
      "https://picsum.photos/seed/deck-2/400/300",
      "https://picsum.photos/seed/deck-3/400/300",
    ],
  },
  {
    id: 15,
    name: "Gaming Desk RGB",
    sku: "GD-RGB-2024",
    price: 199.99,
    description: "Escritorio gaming con iluminación RGB y gestión de cables",
    stock: 9,
    images: [
      "https://picsum.photos/seed/desk-1/400/300",
      "https://picsum.photos/seed/desk-2/400/300",
      "https://picsum.photos/seed/desk-3/400/300",
    ],
  },
  {
    id: 16,
    name: "Streaming Kit Pro",
    sku: "STR-KIT-2024",
    price: 249.99,
    description: "Kit completo para streaming con micrófono y capture card",
    stock: 11,
    images: [
      "https://picsum.photos/seed/kit-1/400/300",
      "https://picsum.photos/seed/kit-2/400/300",
      "https://picsum.photos/seed/kit-3/400/300",
    ],
  },
  {
    id: 17,
    name: "RGB Mousepad XL",
    sku: "RGB-PAD-2024",
    price: 29.99,
    description: "Alfombrilla gaming XL con iluminación RGB",
    stock: 30,
    images: [
      "https://picsum.photos/seed/mousepad-1/400/300",
      "https://picsum.photos/seed/mousepad-2/400/300",
      "https://picsum.photos/seed/mousepad-3/400/300",
    ],
  },
  {
    id: 18,
    name: "Mario Kart 8 Deluxe",
    sku: "MK8-DX-2024",
    price: 59.99,
    description: "El juego de carreras más divertido de Nintendo",
    stock: 22,
    images: [
      "https://picsum.photos/seed/mario-kart-1/400/300",
      "https://picsum.photos/seed/mario-kart-2/400/300",
      "https://picsum.photos/seed/mario-kart-3/400/300",
    ],
  },
  {
    id: 19,
    name: "Gaming Headset Stand",
    sku: "GHS-2024",
    price: 24.99,
    description: "Soporte para auriculares con USB hub y RGB",
    stock: 15,
    images: [
      "https://picsum.photos/seed/stand-1/400/300",
      "https://picsum.photos/seed/stand-2/400/300",
      "https://picsum.photos/seed/stand-3/400/300",
    ],
  },
  {
    id: 20,
    name: "Spider-Man 2",
    sku: "SPM2-2024",
    price: 69.99,
    description: "La última aventura de Spider-Man en PS5",
    stock: 0,
    images: [
      "https://picsum.photos/seed/spiderman-1/400/300",
      "https://picsum.photos/seed/spiderman-2/400/300",
      "https://picsum.photos/seed/spiderman-3/400/300",
    ],
  },
];

const PRODUCTS_PER_PAGE = 8;

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const carouselApis = useRef<{ [key: number]: any }>({});

  // Simular carga
  setTimeout(() => setIsLoading(false), 2000);

  // Filtrar productos basado en el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  // Obtener los productos de la página current
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // Manejar cambio de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generar array de páginas para la paginación
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (hoveredCardId !== null) {
      interval = setInterval(() => {
        const api = carouselApis.current[hoveredCardId];
        if (api && !api.scrollSnapList().length) {
          api.reInit();
        }
        if (api?.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 1500);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [hoveredCardId]);

  return (
    <div className="flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-lg">
        <Input
          type="search"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Resetear a la primera página al buscar
          }}
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
            currentProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden"
                onMouseEnter={() => setHoveredCardId(product.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <Carousel
                  className="w-full group"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  setApi={(api) => {
                    if (api) {
                      carouselApis.current[product.id] = api;
                    }
                  }}
                >
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-[200px]">
                          <img
                            src={image}
                            alt={`${product.name} - Imagen ${index + 1}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden group-hover:flex" />
                  <CarouselNext className="hidden group-hover:flex" />
                </Carousel>
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
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {getPageNumbers().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages)
                    handlePageChange(currentPage + 1);
                }}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
