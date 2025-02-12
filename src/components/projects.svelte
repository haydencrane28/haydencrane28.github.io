<script lang="ts">
    import ProjectCard from './project-card.svelte';

    let projects = [
        {
            title: "USLA Reference Data Application",
            description: "Description of the project",
            image: "/favicon.png",
            link: "https://github.com/haydencrane28/USLA-Reference-Data",
            tags: ["Python", "Streamlit", "SQL"]
        },
        {
            title: "USLA Reference Data Application",
            description: "Description of the project",
            image: "/favicon.png",
            link: "https://github.com/haydencrane28/USLA-Reference-Data",
            tags: ["Python", "Streamlit", "SQL"]
        },
        {
            title: "USLA Reference Data Application",
            description: "Description of the project",
            image: "/favicon.png",
            link: "https://github.com/haydencrane28/USLA-Reference-Data",
            tags: ["Python", "Streamlit", "SQL"]
        },
        {
            title: "USLA Reference Data Application",
            description: "Description of the project",
            image: "/favicon.png",
            link: "https://github.com/haydencrane28/USLA-Reference-Data",
            tags: ["Python", "Streamlit", "SQL"]
        },
        {
            title: "USLA Reference Data Application",
            description: "Description of the project",
            image: "/favicon.png",
            link: "https://github.com/haydencrane28/USLA-Reference-Data",
            tags: ["Python", "Streamlit", "SQL"]
        },
        {
            title: "USLA Reference Data Application",
            description: "Description of the project",
            image: "/favicon.png",
            link: "https://github.com/haydencrane28/USLA-Reference-Data",
            tags: ["Python", "Streamlit", "SQL"]
        },
    ];
</script>

<div class="flex flex-col items-center py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6">
        <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h1>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {#each projects as project}
                <ProjectCard 
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    tags={project.tags}
                />
            {/each}
        </div>
    </div>
</div>