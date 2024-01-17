<script lang="ts">
    import { page } from '$app/stores'
    import { goto } from '$app/navigation'
    import { getRoutes } from '$utils/Routes'
    import Icon from 'svelte-awesome'
    import { get } from 'svelte/store'
    function clapnavbar() {
        const nav = document.getElementById('sidebar')
        if (nav?.classList.contains('hidden')) {
            nav?.classList.remove('hidden')
        } else {
            nav?.classList.add('hidden')
        }
    }
    function closenavbar() {
        document.getElementById('sidebar')?.classList.add('hidden')
    }
</script>

<div class="flex h-full w-full items-center justify-start">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="py-2b hidden h-auto w-full rounded-r-xl bg-slate-800 lg:block" id="sidebar" on:click={() => closenavbar()}>
        {#key $page.route}
            {#each getRoutes() as route}
                <div class="aspect-square w-full p-2">
                    <div class="group relative flex aspect-square w-full items-center justify-center">
                        {#if $page.route.id === route.path}
                            <button on:click={() => goto(route.path)} class="block flex h-full w-full items-center justify-center rounded-xl bg-gray-200/25 font-bold underline">
                                <Icon data={route.icon.active} scale="1.5" />
                            </button>
                        {:else}
                            <button on:click={() => goto(route.path)} class="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-gray-200/10 lg:h-full lg:w-full">
                                <Icon data={route.icon.main} scale="1.5" />
                            </button>
                        {/if}

                        <div class="absolute right-0 top-1/2 z-50 hidden h-auto w-auto -translate-y-1/2 translate-x-full pl-2 group-hover:block">
                            <div class="rounded-xl bg-slate-800 px-4 py-1 text-center text-xl">
                                {route.name}
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        {/key}
    </div>
    <div>
        <button on:click={() => clapnavbar()} type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-r-lg bg-slate-800 p-2 lg:hidden">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
        </button>
    </div>
</div>
