import child_process from "child_process"

function rebuildApp() {
    if (process.env.REBUILD === "true") {
        child_process.execSync("npm run build")
    }
}

async function loadApp() {
    const { app } = await import("./app.js")
}

rebuildApp()
loadApp()
