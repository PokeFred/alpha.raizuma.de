<script lang="ts">
    import { goto } from '$app/navigation'

    export let id: string = ''
    export let title: string = ''
    export let image: string = ''
</script>

<div class="flex h-full w-full items-center justify-center">
    <button on:click={() => goto(`/projects/${id}`)} class="group relative mx-auto my-4 h-64 w-64 cursor-pointer">
        <div class="absolute left-0 top-0 h-64 w-64 rounded-3xl border border-[#ffffff4d] bg-[#ffffff33] shadow-[0_4px_30px_#0000001a] backdrop-blur transition duration-300 group-hover:rotate-[25deg]"></div>
        <div class="absolute left-0 top-0 h-64 w-64 transition duration-300">
            <img src={image} alt="" class="h-full w-full rounded-3xl bg-cover bg-center" loading="lazy" />
        </div>
        <div class="absolute left-0 top-0 h-64 w-64 rounded-3xl border border-[#ffffff4d] bg-[#ffffff33] opacity-0 shadow-[0_4px_30px_#0000001a] backdrop-blur transition duration-700 group-hover:opacity-100">
            <div class="absolute left-0 top-0 flex h-full w-full items-center justify-center p-4 text-center text-5xl font-[2500] text-slate-900">{title}</div>
        </div>
    </button>
</div>
