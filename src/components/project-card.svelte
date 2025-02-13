<script lang="ts">
    import { Github } from 'lucide-svelte';

    export let title;
    export let description;
    export let image;
    export let link;
    export let tags;
</script>

<div class="bg-sky-200 overflow-hidden border rounded-lg shadow-md">
    <div class="relative aspect-video">
        <img src={image} alt={title} class="object-cover w-full h-full transition-transform hover:scale-105"/>
    </div>
    <div class=" p-4">
        <h3 class=" text-sky-950 font-semibold text-xl mb-2">{title}</h3>
        <p class="text-sky-900 text-sm text-gray-500 mb-4">{description}</p>
        <div class="flex flex-wrap gap-2">
            {#each tags as tag}
            <span class="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                {tag}
            </span>
            {/each}
        </div>
    </div>
    <div class="p-4 pt-0">
        <a href={link} target="_blank" aria-label="GitHub">
            <Github size={30} class="inline-flex items-center gap-2 text-sm hover:underline" />
            View on GitHub
        </a>
    </div>
</div>