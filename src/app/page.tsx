import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8">
      <div className="text-center rounded-lg p-4 sm:p-6 md:p-8 shadow-lg text-white bg-gradient-to-r from-orange-400 to-orange-600 w-full">
        <h1 className="text-3xl font-extrabold mb-4">
          ¡Bienvenido al Mundo Gamer!
        </h1>
        <p className="mb-2 text-lg">
          Explora los últimos videojuegos, descubre novedades y comparte tus
          experiencias con la comunidad.
        </p>
        <p className="mb-2">
          Sumérgete en reseñas, noticias y recomendaciones para gamers de todos
          los niveles.
        </p>
        <p className="mb-2">
          ¿Listo para tu próxima aventura digital? ¡Empieza a jugar y alcanza
          nuevas metas!
        </p>
        <p className="mt-6 font-semibold">¡Que comience la partida!</p>
      </div>
      <Carousel className="w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl">
        <CarouselContent className="-ml-2 sm:-ml-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-2 sm:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-4 sm:p-6 min-h-[150px]">
                    <span className="text-xl sm:text-2xl font-semibold">
                      {index + 1}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-center">Terror</h3>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-center">Multijugador</h3>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-center">Acción</h3>
          </CardContent>
        </Card>
      </div>
      <Carousel className="w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl">
        <CarouselContent className="-ml-2 sm:-ml-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-2 sm:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-4 sm:p-6 min-h-[150px]">
                    <span className="text-xl sm:text-2xl font-semibold">
                      {index + 1}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
