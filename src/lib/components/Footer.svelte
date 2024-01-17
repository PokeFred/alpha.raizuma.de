<script lang="ts">
    import { page } from '$app/stores'
    import { goto } from '$app/navigation'
    import { getRoutes } from '$utils/Routes'
</script>

<div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
<div class="w-w-4/5 mx-auto mb-3 h-auto pl-2 pr-2">
    <div>
        <img src="/raizuma-logo.png" alt="" class="mx-auto h-auto w-2/5" />
    </div>
    <div class="ml-auto mr-auto w-fit px-4 text-center text-lg font-medium">Raizuma, das Team der Ewigkeit und deutschen Übersetzungen</div>
</div>
<div class="h-auto w-auto">
    <div class="flex h-auto w-auto flex-wrap items-center justify-center">
        {#each getRoutes() as route}
            <div class={$page.route.id === route.path ? 'opacity-50' : ''}>
                <button on:click={() => goto(route.path)} class="m-2 h-auto w-fit rounded-2xl border px-4 py-1 text-xl font-bold">
                    <div class={$page.route.id === route.path ? 'underline' : ''}>{route.name}</div>
                </button>
            </div>
        {/each}
    </div>
</div>
<div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
<div class="mx-auto mb-1 mt-4 w-fit px-4 text-center text-xl sm:mt-2">© 2023 Raizuma. Alle Rechte vorbehalten.</div>
