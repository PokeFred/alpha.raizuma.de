<script>
    function clapaccord(elementid) {
        const nav = document.getElementById(elementid);
        if (nav?.classList.contains("hidden")) {
            nav?.classList.remove("hidden");
        } else {
            nav?.classList.add("hidden");
        }
    }
</script>

<div class="md:mx-16 w-auto h-auto text-left">
    <!--Head-->
    <div class="w-auto h-auto flex justify-center items-start">
        <div
            class="md:w-1/2 md:h-64 md:text-6xl text-2xl text-center leading-[64px] flex justify-center items-center"
        >
            Yokai Watch 1 (Switch)
        </div>
        <div class="w-1/2 md:h-64 flex justify-center items-center">
            <img
                src="/projects_data/yokai-watch-1-icon.png"
                class="w-auto h-auto max-h-64 aspect-square rounded-xl"
                alt=""
            />
        </div>
    </div>
    <!--Beschreibung-->
    <div class="mx-8 md:mx-16 text-1xl lg:text-2xl">
        <div
            class="flex justify-center items-start py-3 rounded-xl bg-slate-800/75 w-max"
        >
            <a
                class="mx-8 md:mx-16 text-1xl lg:text-2xl hover:text-sky-400/75"
                href="https://gbatemp.net/threads/wip-yo-kai-watch-1-deutsch-version.619087/"
                >Hier geht es zum Download</a
            >
        </div>
        Entwickler: Level-5<br />
        Publisher: Level-5 und Nintendo<br /><br />

        Veröffentlicht: 10 Oktober 2019 (Switch)<br />
        Originalsprache: Japanisch<br />
        Altersfreigabe: USK 6<br /><br />

        In diesem Rollenspiel aus dem Hause Level-5, erlebst du die Geschichte
        von Nathan Adams, oder Katie Forester durch deren Reise durch die Welt
        der Yo-kai. Auf dieser Reise wirst du verschiedene neue Freunde finden,
        die nicht alle menschlich zu sein scheinen. Freunde dich mit so vielen
        Yo-kai wie möglich an, kämpfe mit ihnen gegen andere Yo-kai und löse das
        Geheimnis der Yo-kai World. Erlebe mit der inoffiziellen deutschen
        Übersetzung von Raizuma das Remake des klassichen 3DS von Yo-kai Watch 1
        noch einmal neu kennen!
    </div>
</div>
<!--Patchnote-->
<div
    class="mx-auto my-2 w-4/5 h-auto border border-neutral-300 rounded-2xl"
></div>
<div
    class="mx-8 md:mx-16 text-1xl lg:text-2xl py-3 bg-slate-800/25 rounded-xl text-center"
>
    <button
        on:click={() => clapaccord("Patch-1.1.1")}
        class="hover:text-sky-400/75">Patchnotes Ver. 1.1.1</button
    >
    <div id="Patch-1.1.1" class="">
        <div
            class="mx-auto my-2 w-4/5 h-auto border border-neutral-300 rounded-2xl"
        ></div>
        <ul class="">
            <li>
                Das Spiel-Icon, Name Version und Author wurden geändert. Einfach
                in das Switch Menü, wo man das Spiel normal startet.
            </li>
        </ul>
    </div>
    <div class="text-[7px] lg:text-sm">
        WARNUNG: Wer keine Cheats, in der neuen Version, haben will MUSS den
        Cheats Ordner löschen, oder man fügt unter Atmosphere/config/ die
        "system_settings.ini" Datei hinzu.
    </div>
</div>
<!--Patchnote-->
<div
    class="mx-auto my-2 w-4/5 h-auto border border-transparent rounded-2xl"
></div>
<div
    class="mx-8 md:mx-16 text-1xl lg:text-2xl py-3 bg-slate-800/25 rounded-xl text-center"
>
    <button
        on:click={() => clapaccord("Patch-1.1.0")}
        class="hover:text-sky-400/75">Patchnotes Ver. 1.1.0</button
    >
    <div id="Patch-1.1.0" class="hidden">
        <div
            class="mx-auto my-2 w-4/5 h-auto border border-neutral-300 rounded-2xl"
        ></div>
        <ul class="">
            <li>Alle Hilfe Bilder wurden hinzugefügt.</li>
            <li>Einige fehlende Sounddateien wurden ergänzt.</li>
            <li>Grafiken und Texte wurden korrigiert.</li>
        </ul>
        <div class="text-[7px] lg:text-sm">
            WARNUNG: Wer keine Cheats, in der neuen Version, haben will MUSS den
            Cheats Ordner löschen, oder man fügt unter Atmosphere/config/ die
            "system_settings.ini" Datei hinzu.
        </div>
    </div>
</div>
<!--Patchnote-->
<div
    class="mx-auto my-2 w-4/5 h-auto border border-transparent rounded-2xl"
></div>
<div
    class="mx-8 md:mx-16 text-1xl lg:text-2xl py-3 bg-slate-800/25 rounded-xl text-center"
>
    <button
        on:click={() => clapaccord("Patch-1.0.2")}
        class="hover:text-sky-400/75">Patchnotes Ver. 1.0.2</button
    >
    <div id="Patch-1.0.2" class="hidden">
        <div
            class="mx-auto my-2 w-4/5 h-auto border border-neutral-300 rounded-2xl"
        ></div>
        <ul class="">
            <li>
                Es wurde die aktuelle Patch-Version beim Start Menü hinzugefügt.
            </li>
            <li>Das Yo-kai Watch 1 Logo wurde überarbeitet.</li>
            <li>
                Es wurde ein Problem behoben, welches dazu führt, dass Zufällige
                Spitznamen nicht richtig übernommen wurden.
            </li>
            <li>
                Es wurde ein Problem behoben, welches dazu führt, dass die
                Spitznamen, bei der Bestätigung, nicht richtig angezeigt wurden.
            </li>
            <li>Es wurde ein Problem, im Posen-Shop, behoben.</li>
            <li>Es wurden einige Quest-Texte überarbeitet.</li>
            <li>Es wurde der Internet Download auf Emulatoren entfernt.</li>
            <li>
                Es wurde das NFC Scan Menü überarbeitet (führt auf dem Emulator
                weiterhin zu abstürzen, da er kein NFC-Lesegerät besitzt)
            </li>
        </ul>
        <div class="text-[7px] lg:text-sm">
            WARNUNG: Wer keine Cheats, in der neuen Version, haben will MUSS den
            Cheats Ordner löschen, oder man fügt unter Atmosphere/config/ die
            "system_settings.ini" Datei hinzu.
        </div>
    </div>
</div>
<!--Patchnote-->
<div
    class="mx-auto my-2 w-4/5 h-auto border border-transparent rounded-2xl"
></div>
<div
    class="mx-8 md:mx-16 text-1xl lg:text-2xl py-3 bg-slate-800/25 rounded-xl text-center"
>
    <button
        on:click={() => clapaccord("Patch-1.0.1")}
        class="hover:text-sky-400/75">Patchnotes Ver. 1.0.1</button
    >
    <div id="Patch-1.0.1" class="hidden">
        <div
            class="mx-auto my-2 w-4/5 h-auto border border-neutral-300 rounded-2xl"
        ></div>
        <ul class="">
            <li>
                Es wurde ein Problem behoben, welches dazu führte, dass wenn man
                den Yo-kaimat benutzen will, das Spiel abstürzt.
            </li>
            <li>
                Es wurden fehlende Zielangaben im Kapitel „Lebt wohl, Yo-kai“
                hinzugefügt.
            </li>
            <li>
                Es wurde ein Problem mit der Zwischensequenz nach dem Kampf mit
                McKraken behoben.
            </li>
            <li>
                Es wurden Cheats hinzugefügt, welche man aktivieren und
                deaktivieren kann.
            </li>
            <li>Es wurde ein neues Teamcover hinzugefügt.</li>
        </ul>
    </div>
</div>
