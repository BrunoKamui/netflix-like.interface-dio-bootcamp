let slider = new KeenSlider("#anime-slides", {
    spacing: 15,
    slidesPerView: 8,
    centered: false,
    loop: true,
    mode: "free-snap",
    breakpoints: {
        "(max-width: 1536px)": {
        slidesPerView: 6,
        mode: "free-snap",
        },
        "(max-width: 1280px)": {
        slidesPerView: 5,
        mode: "free-snap",
        },
        "(max-width: 1024px)": {
        slidesPerView: 4,
        mode: "free-snap",
        },
        "(max-width: 800px)": {
        slidesPerView: 3,
        mode: "free-snap",
        },
        "(max-width: 601px)": {
        slidesPerView: 2,
        mode: "free-snap",
        },
        "(max-width: 425px)": {
        slidesPerView: 1,
        mode: "snap",
        },
    },
})
