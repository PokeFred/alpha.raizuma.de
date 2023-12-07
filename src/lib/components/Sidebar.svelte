<script lang="ts">
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { getRoutes } from "$utils/Routes";
    import Icon from "svelte-awesome";
    import { get } from "svelte/store";
    function clapnavbar(){
      const nav = document.getElementById("sidebar");
      if(nav?.classList.contains("hidden")){
        nav?.classList.remove("hidden");  
      }
      else{
        nav?.classList.add("hidden");  
      }
    }
    function closenavbar(){
        document.getElementById("sidebar")?.classList.add("hidden");
    }
</script>

<div class="w-full h-full justify-start items-center flex">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="w-full h-auto bg-slate-800 rounded-r-xl py-2b lg:block hidden" id="sidebar" on:click={() => closenavbar()}>
        {#key $page.route}
            {#each getRoutes() as route}
                <div class="w-full aspect-square p-2">
                    <div
                        class="w-full aspect-square flex justify-center items-center relative group"
                    >
                        {#if $page.route.id === route.path}
                            <button
                                on:click={() => goto(route.path)}
                                class="w-full h-full block bg-gray-200/25 rounded-xl flex justify-center items-center font-bold underline"
                            >
                                <Icon data={route.icon.active} scale="1.5" />
                            </button>
                        {:else}
                            <button
                                on:click={() => goto(route.path)}
                                class="lg:w-full lg:h-full w-10 h-10 rounded-xl flex justify-center items-center hover:bg-gray-200/10"
                            >
                                <Icon data={route.icon.main} scale="1.5" />
                            </button>
                        {/if}

                        <div
                            class="top-1/2 right-0 w-auto h-auto translate-x-full -translate-y-1/2 hidden z-50 absolute pl-2 group-hover:block"
                        >
                            <div
                                class="text-xl text-center bg-slate-800 rounded-xl px-4 py-1"
                            >
                                {route.name}
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        {/key}
    </div>
    <div>
        <button on:click={() => clapnavbar()} type="button" class="lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 rounded-r-lg bg-slate-800">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
    </div>

</div>
