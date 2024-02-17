export const cityImages = [
    {
        src: "/worldCities/bangkok.jpeg",
        alt: "Bangkok",
        city: "Bangkok"
    },
    {
        src: "/worldCities/barcelona.jpeg",
        alt: "Barcelona",
        city: "Barcelona"
    },
    {
        src: "/worldCities/kruger.jpeg",
        alt: "Kruger",
        city: "Kruger"
    },
    {
        src: "/worldCities/london.jpeg",
        alt: "London",
        city: "London"
    },
    {
        src: "/worldCities/marrakesh.jpeg",
        alt: "Marrakesh",
        city: "Marrakesh"
    },
    {
        src: "/worldCities/new_york.jpeg",
        alt: "New York",
        city: "New York"
    },
    {
        src: "/worldCities/paris.jpeg",
        alt: "Paris",
        city: "Paris"
    },
    {
        src: "/worldCities/quebec.jpeg",
        alt: "Quebec",
        city: "Quebec"
    },
    {
        src: "/worldCities/rio.jpeg",
        alt: "Rio",
        city: "Rio"
    },
    {
        src: "/worldCities/seoul.jpeg",
        alt: "Seoul",
        city: "Seoul"
    },
    {
        src: "/worldCities/singapore.jpeg",
        alt: "Singapore",
        city: "Singapore"
    },
    {
        src: "/worldCities/stockholm.jpeg",
        alt: "Stockholm",
        city: "Stockholm"
    },
    {
        src: "/worldCities/sydney.jpeg",
        alt: "Sydney",
        city: "Sydney"
    },
    {
        src: "/worldCities/tokyo.jpeg",
        alt: "Tokyo",
        city: "Tokyo"
    },
    {
        src: "/worldCities/venice.jpeg",
        alt: "Venice",
        city: "Venice"
    }
];

export function getRandomCity() {
    return cityImages[Math.floor(Math.random() * cityImages.length)];
}