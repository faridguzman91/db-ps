import CarouselEducationalSpace from "./gallery-works-containers.tsx/carousel-educational-space";
import CarouselPaintings from "./gallery-works-containers.tsx/carousel-paintings";
import CarouselPublicSpace from "./gallery-works-containers.tsx/carousel-public-space";
import CarouselSculptures from "./gallery-works-containers.tsx/carousel-sculptures";

function GalleryCarousel() {
  return (
    <>
      <CarouselEducationalSpace />
      <CarouselPaintings />
      <CarouselPublicSpace />
      <CarouselSculptures />
    </>
  );
}

export default GalleryCarousel;
