import type { RequestHandler } from './$types'
import { readFileSync } from 'fs'
import { join as createPath } from 'path'

export const GET: RequestHandler = (): Response => {
    try {
        const filePath: string = createPath(process.cwd(), 'src', 'routes', 'api', 'privacypolicy', 'content.txt')
        const fileContent: string = readFileSync(filePath, { encoding: 'utf-8' })
        return new Response(fileContent)
    } catch (error: unknown) {
        console.log(error)
        return new Response('Error')
    }
}