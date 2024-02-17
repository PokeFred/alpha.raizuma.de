import type { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faHouse, faFolder, faFolderOpen, faBook, faBookOpen, faInfo, faPeopleGroup, faInfoCircle, faIdCard, faShield } from '@fortawesome/free-solid-svg-icons'

interface Route {
    name: string
    icon: {
        main: IconDefinition
        active: IconDefinition
    }
    path: string
}

const baseTitle: string = 'Raizuma'
const routes: Route[] = [
    {
        name: 'Home',
        icon: {
            main: faHouse,
            active: faHouse,
        },
        path: '/',
    },
    {
        name: 'Projekte',
        icon: {
            main: faFolder,
            active: faFolderOpen,
        },
        path: '/projects',
    },
    {
        name: 'Blog Posts',
        icon: {
            main: faBook,
            active: faBookOpen,
        },
        path: '/blogs',
    },
    {
        name: 'Über uns',
        icon: {
            main: faInfo,
            active: faInfoCircle,
        },
        path: '/about',
    },
    {
        name: 'Team',
        icon: {
            main: faPeopleGroup,
            active: faPeopleGroup,
        },
        path: '/team',
    },
    {
        name: 'Kontakt',
        icon: {
            main: faIdCard,
            active: faIdCard,
        },
        path: '/contact',
    },
    {
        name: 'DSGVO',
        icon: {
            main: faShield,
            active: faShield,
        },
        path: '/privacypolicy',
    },
]

export function getRoutes(): Route[] {
    return routes
}

export function getPageTitle(path: string | null): string {
    if (path === null) return baseTitle

    let route: Route | undefined
    routes.forEach((element: Route) => {
        if (element.path === path) {
            route = element
        }
    })

    if (!route) return baseTitle

    return route.name + ' | ' + baseTitle
}
