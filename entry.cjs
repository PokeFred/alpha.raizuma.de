const {execSync} = require("child_process")

function rebuildApp() {
    if (process.env.REBUILD === "true") {
        execSync("npm install && npm run build")
    }
}

async function loadApp() {
    const { app } = await import("./app.js")
}

rebuildApp()
loadApp()
