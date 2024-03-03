import type { RequestHandler } from './$types'
import { readFileSync } from 'fs'
import { join as createPath } from 'path'

export const GET: RequestHandler = (): Response => {
    try {
        const filePath: string = createPath(process.cwd(), 'src', 'routes', 'api', 'determination', 'data.win.zip')
        const fileContent: Buffer = readFileSync(filePath)
        return new Response(fileContent, {
            headers: {
                'Content-Type': 'application/zip',
                'Content-Disposition': 'attachment; filename=data.win.zip'
            }
        })
    } catch (error: unknown) {
        console.error(error)
        return new Response('File not found or not readable', {
            status: 404,
            statusText: 'Not Found'
        })
    }
}
