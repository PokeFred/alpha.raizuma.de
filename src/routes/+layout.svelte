<script lang="ts">
    import '../app.css'
    import Sidebar from '$components/Sidebar.svelte'
    import Footer from '$components/Footer.svelte'
    import PageTransition from '$components/PageTransition.svelte'
    import { page } from '$app/stores'
    import { getPageTitle } from '$utils/Routes'
</script>

<svelte:head>
    <title>{getPageTitle($page.route.id)}</title>
</svelte:head>

<div class="relative h-screen w-screen text-slate-200">
    <div class="absolute left-0 top-0 h-full w-full overflow-hidden">
        <div class="absolute left-0 top-0 h-full w-full bg-[#010c0e]"></div>
        <div class="absolute left-0 top-1/4 h-1/5 w-10/12 -translate-x-1/4 -translate-y-1/3 -rotate-[10deg] rounded-l-full bg-[#ff99dd] opacity-25 blur-3xl"></div>
        <div class="absolute bottom-1/4 left-2/4 h-1/5 w-10/12 -translate-x-1/4 translate-y-1/2 rotate-[15deg] rounded-l-full bg-[#4ddbff] opacity-25 blur-3xl"></div>
    </div>
    <div class="relative left-0 top-0 flex h-full w-full overflow-hidden">
        <div class="w-17 absolute left-1/2 top-0 z-10 flex h-14 -translate-x-1/2 items-center justify-center rounded-b-xl bg-slate-800/90 px-8 text-3xl sm:h-16 lg:px-24">
            <img src="/raizuma-logo.png" alt="" class="mx-auto h-full w-full" />
        </div>
        <div class="lg:z-1 absolute z-10 h-full w-16 translate-y-1 lg:flex">
            <Sidebar />
        </div>
        <div class="relative h-full w-full overflow-y-scroll pb-2 pt-20">
            <PageTransition url={$page.url}>
                <div class="h-auto w-auto rounded-2xl px-8 pb-4">
                    <slot />
                </div>
                <Footer />
            </PageTransition>
        </div>
    </div>
</div>
