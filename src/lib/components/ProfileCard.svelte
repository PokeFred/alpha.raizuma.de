<script lang="ts">
    export let name: string = ''
    export let position: string = ''
    export let image: string = ''
</script>

<div class="relative m-4 h-52 w-40">
    <div class="absolute bottom-0 left-0 h-44 w-40 rounded-xl bg-slate-900">
        <div class="absolute -top-8 left-4 h-32 w-32">
            <img src={image} alt="" class="h-32 w-32 rounded-3xl bg-cover bg-center" />
        </div>
        <div class="absolute left-2 right-2 top-24 flex h-20 w-auto flex-wrap items-center justify-center">
            <div class="flex h-8 w-full items-end justify-center text-xl">{name}</div>
            <div class="flex h-12 w-full items-start justify-center pt-1 text-center text-xs">{position}</div>
        </div>
    </div>
</div>
