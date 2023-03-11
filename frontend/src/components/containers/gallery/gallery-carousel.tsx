import React from 'react'
import CarouselEducationalSpace from './gallery-works-containers.tsx/carousel-educational-space'
import CarouselPaintings from './gallery-works-containers.tsx/carousel-paintings'
import CarouselPublicSpace from './gallery-works-containers.tsx/carousel-public-space'
import CarouselSculptures from './gallery-works-containers.tsx/carousel-sculptures'

function GalleryCarousel() {
    return (
        <>
            <div>
                <CarouselEducationalSpace />
            </div>
            <div>
                <CarouselPaintings />
            </div>
            <div>
                <CarouselPublicSpace />

            </div>
            <div>
                <CarouselSculptures />
            </div>

        </>

    )
}

export default GalleryCarousel