const child_process = require("child_process")

function buildApp() {
    const args = process.argv.slice(2)

    let status = true
    args.forEach((element) => {
        if (element === "--rebuild=true") {
            status = true
        }
    })

    if (status) {
        child_process.execSync("npm run build")
    }
}

async function loadApp() {
    const { app } = await import("./app.js")
}

buildApp()
loadApp()
