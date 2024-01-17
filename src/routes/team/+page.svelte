<script lang="ts">
    import ProfileCard from '$components/ProfileCard.svelte'
</script>

<div class="mb-4 h-auto w-auto rounded-xl bg-slate-800/90 text-center text-2xl sm:mx-8 md:mx-16 lg:text-4xl">Das Team</div>
<div class="flex h-auto flex-wrap items-center justify-center">
    <ProfileCard name="Hachiro" position="CEO" image="/team/hachiro.png" />
    <ProfileCard name="8-Pit" position="Mitgründer von Yokai Watch Deutschland" image="/team/8-pit.png" />
    <ProfileCard name="Nozoko" position="Management" image="/team/nozoko.png" />
    <ProfileCard name="PokeFred" position="Developer" image="/team/pokefred.png" />
    <ProfileCard name="Vidpic" position="Leitung Yokai Watch Deutschland" image="/team/vidpic.png" />
    <ProfileCard name="Sprössling" position="Leitung Yokai Watch Deutschland" image="/team/sprössling.png" />
    <ProfileCard name="Marv" position="Leitung Yokai Watch & Deltarune Deutschland" image="/team/marv.png" />
    <ProfileCard name="Nagisa Shiota" position="Leitung Deltarune Deutschland & Developer" image="/team/sev.png" />
    <ProfileCard name="Ericsucht" position="Direct Leitung" image="/team/ericsucht.png" />
    <ProfileCard name="Etendo" position="Direct Leitung" image="/team/etendo.png" />
</div>
