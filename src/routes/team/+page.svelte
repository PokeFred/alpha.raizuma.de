<script lang="ts">
    import ProfileCard from "$components/ProfileCard.svelte"
</script>
<div class="sm:mx-8 md:mx-16 mb-4 w-auto h-auto text-2xl lg:text-4xl text-center bg-slate-800/90 rounded-xl">Das Team</div>
<div class="h-auto flex flex-wrap justify-center items-center">
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
