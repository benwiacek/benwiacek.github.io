const techIcons = {
    html: '<i class="fa-brands fa-html5"></i>',
    css: '<i class="fa-brands fa-css3-alt"></i>',
    js: '<i class="fa-brands fa-js"></i>',
    github: '<i class="fa-brands fa-github"></i>'
}

const projectsList = [
    {
        name: "Oldagram",
        screenshot: "images/oldagram-screenshot.png",
        blurb: "Interactive Instagram clone built with dynamic post generation. Every element comes from JavaScript data, not static HTML.",
        repo: "https://github.com/benwiacek/Oldagram",
        url: "https://oldagram-ben.netlify.app/",
        tech: ["html", "css", "js"]
    },
    {
        name: "Unit Converter",
        screenshot: "images/converter-screenshot.png",
        blurb: "Lightweight utility app converting between multiple units (length, volume, mass, temperature), built with vanilla JavaScript.",
        repo: "https://github.com/benwiacek/unit-converter",
        url: "https://unit-converter-ben.netlify.app/",
        tech: ["html", "css", "js"]
    },
    {
        name: "Password Generator",
        screenshot: "images/passwords-screenshot.png",
        blurb: "Generates secure, randomized passwords with customizable options. Demonstrates JavaScript loops, conditionals, and string manipulation.",
        repo: "https://github.com/benwiacek/password-generator",
        url: "https://password-generator-ben.netlify.app/",
        tech: ["html", "css", "js"]
    },
    {
        name: "Rugby Scoreboard",
        screenshot: "images/scoreboard-screenshot.png",
        blurb: "Interactive scoreboard for rugby games, built with DOM manipulation and event listeners to simulate the real-time score updates of live sports apps.",
        repo: "https://github.com/benwiacek/scoreboard",
        url: "https://scoreboard-ben.netlify.app/",
        tech: ["html", "css", "js"]
    },
    {
        name: "Visit Sana'a, Yemen",
        screenshot: "images/sanaa-screenshot.png",
        blurb: "A travel-themed landing page built and expanded beyond the original Figma design with additional sections, custom content, and styling.",
        repo: "https://github.com/benwiacek/visit-sanaa",
        url: "https://visit-sanaa.netlify.app/",
        tech: ["html", "css"]
    }
]

export { techIcons, projectsList }