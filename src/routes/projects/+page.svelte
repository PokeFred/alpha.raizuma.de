<script lang="ts">
    import ProjectCard from '$components/ProjectCard.svelte'
</script>

<div class="mb-4 h-auto w-auto rounded-xl bg-slate-800/90 text-center text-2xl sm:mx-8 md:mx-16 lg:text-4xl">Projekte</div>
<div class="mx-auto my-8 grid max-w-5xl grid-cols-[1fr] place-content-center gap-y-4 sm:grid-cols-[1fr_1fr]">
    <ProjectCard id="yokai_watch_1_switch" title="Yokai Watch 1 (Switch)" image="/projects_data/yokai-watch-1-icon.png" />
    <ProjectCard id="yokai_watch_4" title="Yokai Watch 4++ (Switch)" image="/projects_data/yokai-watch-4-icon.png" />
    <ProjectCard id="deltarune" title="Deltarune" image="/projects_data/deltarune.png" />
</div>
