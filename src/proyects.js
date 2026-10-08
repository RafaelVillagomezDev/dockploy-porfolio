import zappyMap from "../public/assets/proyects/zappy_map.png"
import flopy from "../public/assets/proyects/flopy.png"

export const proyects = [
  {
    id: 1,
    title: "ZappyMap",
    thumbnail: zappyMap,
    alt: "Imagen proyecto ZappyMap",
    website: "https://zappymap.yandrydev.cloud/",
    linkGithub: "https://github.com/RafaelVillagomezDev/ApiMadrid",
    description: "Plataforma para registrar y descubrir restaurantes. Desarrollada con Vue, Express y TypeScript bajo una arquitectura de microservicios. Integra APIs de geodatos y Cloudinary, y está completamente contenerizada y desplegada con Docker a través de Dockploy."
  },
  {
    id: 1,
    title: "Flopy",
    thumbnail: flopy,
    alt: "Imagen proyecto ZappyMap",
    website: "https://flopy.yandrydev.cloud/",
    linkGithub: "https://github.com/RafaelVillagomezDev/Flopy",
    description: "Flopy es una SPA de descubrimiento y streaming musical desarrollada con React, TypeScript y empaquetada con Vite.Utiliza Redux Toolkit para gestionar de forma predecible el estado global del reproductor de audio, colas y búsquedas en tiempo real.Integra múltiples APIs externas (iTunes, Deezer y TheAudioDB) para combinar previews, metadatos, rankings y biografías completas de artistas."
  },
];
