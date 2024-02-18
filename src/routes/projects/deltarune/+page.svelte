<script>
    function clapaccord(elementid) {
        const nav = document.getElementById(elementid)
        if (nav?.classList.contains('hidden')) {
            nav?.classList.remove('hidden')
        } else {
            nav?.classList.add('hidden')
        }
    }
</script>

<div class="h-auto w-auto text-left md:mx-16">
    <!--Head-->
    <div class="flex h-auto w-auto items-start justify-center">
        <div class="flex items-center justify-center text-center text-2xl leading-[64px] md:h-64 md:w-1/2 md:text-6xl">Deltarune</div>
        <div class="flex w-1/2 items-center justify-center md:h-64">
            <img src="/projects_data/deltarune.png" class="aspect-square h-auto max-h-64 w-auto rounded-xl" alt="" />
        </div>
    </div>
    <!--Beschreibung-->
    <div class="text-1xl mx-8 md:mx-16 lg:text-2xl">
        <div class="flex w-max items-start justify-center rounded-xl bg-slate-800/75 py-3">
            <a class="text-1xl mx-8 hover:text-sky-400/75 md:mx-16 lg:text-2xl" href="#">Download wird vorbereitet</a>
        </div>
        Entwickler: Toby Fox<br />
        Publisher: Toby Fox<br /><br />

        Veröffentlicht: 31 Oktober 2018<br />
        Originalsprache: Englisch<br />
        Altersfreigabe: USK 6<br /><br />

        Deltarune ist ein 2D Pixelspiel der Genre RP. Das Spiel basiert auf das Prinzip des Spiels 'Undertale', wo man verschiedene Wegen einschlagen kann, die jeweils eine Auswirkung
        zum Spielverlauf haben. Vernichten, Verschonen oder eher neutral, in diesem Spiel ist vielleicht deine Entscheidung doch nicht wichtig.
    </div>
</div>
<!--Patchnote-->
<!--
<div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
<div class="text-1xl mx-8 rounded-xl bg-slate-800/25 py-3 text-center md:mx-16 lg:text-2xl">
    <button on:click={() => clapaccord('Patch-1.1.1')} class="hover:text-sky-400/75">Patchnotes Ver. 1.1.1</button>
    <div id="Patch-1.1.1" class="">
        <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
        <ul class="">
            <li>Das Spiel-Icon, Name Version und Author wurden geändert. Einfach in das Switch Menü, wo man das Spiel normal startet.</li>
        </ul>
        <div class="text-[7px] lg:text-sm">WARNUNG: Wer keine Cheats, in der neuen Version, haben will MUSS den Cheats Ordner löschen, oder man fügt unter Atmosphere/config/ die "system_settings.ini" Datei hinzu.</div>
    </div>
</div>-->
<!--Patchnote-->
