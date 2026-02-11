const techIcons = {
    html: '<i class="fa-brands fa-html5"></i>',
    css: '<i class="fa-brands fa-css3-alt"></i>',
    js: '<i class="fa-brands fa-js"></i>',
    github: '<i class="fa-brands fa-github"></i>',
    react: '<i class="fa-brands fa-react"></i>'
}

const projectsList = [
    {
        name: "Wildlife Quiz",
        id: "quiz",
        screenshot: "images/quiz-screenshot.png",
        blurb: "A React-based trivia game that tests your knowledge of wildlife, featuring questions from the Open Trivia Database API.",
        repo: "https://github.com/benwiacek/quiz",
        url: "https://wildlife-quiz.netlify.app/",
        tech: ["react", "js", "css"],
        tags: ["State", "API-driven", "Conditional UI"]
    },
    {
        name: "Movie Watchlist",
        id: "movie-watchlist",
        screenshot: "images/watchlist-screenshot.png",
        blurb: "Movie search and watchlist manager powered by OMDb API with local storage persistence.",
        repo: "https://github.com/benwiacek/movie-watchlist",
        url: "https://movie-watchlist-ben.netlify.app/",
        tech: ["js", "css", "html"],
        tags: ["API-driven", "Responsive UI", "Local Storage"]
    },
    {
        name: "Obiwan Kendogu",
        id: "kendoshop",
        screenshot: "images/kendoshop-screenshot.png",
        blurb: "A Star Wars-themed Kendo equipment shop with full cart functionality, dynamic discounts, and a humorous checkout experience.",
        repo: "https://github.com/benwiacek/kendo-shop",
        url: "https://obiwan-kendogu.netlify.app/",
        tech: ["js", "css", "html"],
        tags: ["Dynamic UI", "Form handling", "Cart logic"]
    },
    {
        name: "Oldagram",
        id: "oldagram",
        screenshot: "images/oldagram-screenshot.png",
        blurb: "An Instagram clone featuring famous artists' humorous selfies.",
        repo: "https://github.com/benwiacek/Oldagram",
        url: "https://oldagram-ben.netlify.app/",
        tech: ["js", "css", "html"],
        tags: ["Event-driven", "Dynamic UI", "Vanilla JS"]
    },
    {
        name: "Unit Converter",
        id: "unit-converter",
        screenshot: "images/converter-screenshot.png",
        blurb: "A lightweight utility app for converting between multiple units (length, volume, mass, temperature).",
        repo: "https://github.com/benwiacek/unit-converter",
        url: "https://unit-converter-ben.netlify.app/",
        tech: ["js", "css", "html"],
        tags: ["DOM manipulation", "Utility app", "Vanilla JS"]
    },
    {
        name: "Password Generator",
        id: "password-generator",
        screenshot: "images/passwords-screenshot.png",
        blurb: "A customizable password generator that creates two random passwords at once with options for character types and length.",
        repo: "https://github.com/benwiacek/password-generator",
        url: "https://password-generator-ben.netlify.app/",
        tech: ["js", "css", "html"],
        tags: ["Algorithmic logic", "Randomization", "Vanilla JS"]
    },
    {
        name: "Rugby Scoreboard",
        id: "rugby-scoreboard",
        screenshot: "images/scoreboard-screenshot.png",
        blurb: "An interactive scoreboard for rugby matches with real-time score tracking, game timer, and detailed statistics.",
        repo: "https://github.com/benwiacek/scoreboard",
        url: "https://scoreboard-ben.netlify.app/",
        tech: ["js", "css", "html"],
        tags: ["DOM manipulation", "State logic", "Vanilla JS"]
    },
    {
        name: "Visit Sana'a, Yemen",
        id: "visit-sanaa",
        screenshot: "images/sanaa-screenshot.png",
        blurb: "A travel-themed landing page showcasing the culture, food, and landmarks of Sana'a, Yemen.",
        repo: "https://github.com/benwiacek/visit-sanaa",
        url: "https://visit-sanaa.netlify.app/",
        tech: ["html", "css"],
        tags: ["Static site", "Layout & styling"]
    }
]

export { techIcons, projectsList }