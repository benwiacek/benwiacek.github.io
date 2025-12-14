const techIcons = {
    html: '<i class="fa-brands fa-html5"></i>',
    css: '<i class="fa-brands fa-css3-alt"></i>',
    js: '<i class="fa-brands fa-js"></i>',
    github: '<i class="fa-brands fa-github"></i>'
}

const projectsList = [
    {
        name: "Movie Watchlist",
        id: "movie-watchlist",
        screenshot: "images/watchlist-screenshot.png",
        blurb: "Movie search and watchlist manager powered by OMDb API with local storage persistence.",
        repo: "https://github.com/benwiacek/movie-watchlist",
        url: "https://movie-watchlist-ben.netlify.app/",
        tech: ["html", "css", "js"],
        tags: ["APIs", "Responsive", "Local Storage"]
    },
    {
        name: "Obiwan Kendogu",
        id: "kendoshop",
        screenshot: "images/kendoshop-screenshot.png",
        blurb: "Mock Star Wars theme online Kendo shop where users can add items to a cart, apply discounts, and check out through a modal form.",
        repo: "https://github.com/benwiacek/kendo-shop",
        url: "https://obiwan-kendogu.netlify.app/",
        tech: ["html", "css", "js"],
        tags: ["Dynamic", "Form handling", "Cart logic"]
    },
    {
        name: "Oldagram",
        id: "oldagram",
        screenshot: "images/oldagram-screenshot.png",
        blurb: "Interactive Instagram clone built with dynamic post generation. Every element comes from JavaScript data, not static HTML.",
        repo: "https://github.com/benwiacek/Oldagram",
        url: "https://oldagram-ben.netlify.app/",
        tech: ["html", "css", "js"],
        tags: ["Dynamic", "Events", "Vanilla JS"]
    },
    {
        name: "Unit Converter",
        id: "unit-converter",
        screenshot: "images/converter-screenshot.png",
        blurb: "Lightweight utility app converting between multiple units (length, volume, mass, temperature), built with vanilla JavaScript.",
        repo: "https://github.com/benwiacek/unit-converter",
        url: "https://unit-converter-ben.netlify.app/",
        tech: ["html", "css", "js"],
        tags: ["DOM", "Utility app", "Vanilla JS"]
    },
    {
        name: "Password Generator",
        id: "password-generator",
        screenshot: "images/passwords-screenshot.png",
        blurb: "Generates randomized passwords with customizable options, using JavaScript loops, conditionals, and string manipulation.",
        repo: "https://github.com/benwiacek/password-generator",
        url: "https://password-generator-ben.netlify.app/",
        tech: ["html", "css", "js"],
        tags: ["Loops", "Math functions", "Vanilla JS"]
    },
    {
        name: "Rugby Scoreboard",
        id: "rugby-scoreboard",
        screenshot: "images/scoreboard-screenshot.png",
        blurb: "Interactive scoreboard for rugby games, built with DOM manipulation, simulating the real-time score updates of live sports apps.",
        repo: "https://github.com/benwiacek/scoreboard",
        url: "https://scoreboard-ben.netlify.app/",
        tech: ["html", "css", "js"],
        tags: ["DOM", "Loops", "Vanilla JS"]
    },
    {
        name: "Visit Sana'a, Yemen",
        id: "visit-sanaa",
        screenshot: "images/sanaa-screenshot.png",
        blurb: "A travel-themed landing page built and expanded beyond the original Figma design with additional sections, custom content, and styling.",
        repo: "https://github.com/benwiacek/visit-sanaa",
        url: "https://visit-sanaa.netlify.app/",
        tech: ["html", "css"],
        tags: ["Static site", "CSS Fundamentals"]
    }
]

export { techIcons, projectsList }