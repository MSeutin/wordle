export const cityImages = [
    {
        src: "/illustrations/abudhabi.webp",
        alt: "Abu Dhabi",
        city: "Abu Dhabi"
    },
    {
        src: "/illustrations/athens.webp",
        alt: "Athens",
        city: "Athens"
    },
    {
        src: "/illustrations/bangkok.webp",
        alt: "Bangkok",
        city: "Bangkok"
    },
    {
        src: "/illustrations/capetown.webp",
        alt: "Cape Town",
        city: "Cape Town"
    },
    {
        src: "/illustrations/hongkong.webp",
        alt: "Hong Kong",
        city: "Hong Kong"
    },
    {
        src: "/illustrations/london.webp",
        alt: "London",
        city: "London"
    },
    {
        src: "/illustrations/madrid.webp",
        alt: "Madrid",
        city: "Madrid"
    },
    {
        src: "/illustrations/marrakesh.webp",
        alt: "Marrakesh",
        city: "Marrakesh"
    },
    {
        src: "/illustrations/milan.webp",
        alt: "Milan",
        city: "Milan"
    },
    {
        src: "/illustrations/newyork.webp",
        alt: "New York",
        city: "New York"
    },
    {
        src: "/illustrations/paris.webp",
        alt: "Paris",
        city: "Paris"
    },
    {
        src: "/illustrations/rio.webp",
        alt: "Rio de Janeiro",
        city: "Rio de Janeiro"
    },
    {
        src: "/illustrations/saigon.webp",
        alt: "Saigon",
        city: "Saigon"
    },
    {
        src: "/illustrations/seoul.webp",
        alt: "Seoul",
        city: "Seoul"
    },
    {
        src: "/illustrations/singapore.webp",
        alt: "Singapore",
        city: "Singapore"
    },
    {
        src: "/illustrations/sydney.webp",
        alt: "Sydney",
        city: "Sydney"
    },
    {
        src: "/illustrations/tokyo.webp",
        alt: "Tokyo",
        city: "Tokyo"
    },
    { 
        src: "/illustrations/vancouver.webp",
        alt: "Vancouver",
        city: "Vancouver"
    },
    {
        src: "/illustrations/ulanbatur.webp",
        alt: "Ulan Batur",
        city: "Ulan Batur"}
];

export function getRandomCity() {
    return cityImages[Math.floor(Math.random() * cityImages.length)];
}