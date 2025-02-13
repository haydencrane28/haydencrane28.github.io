<script lang="ts">
    import ProjectCard from './project-card.svelte';

    let projects = [  
        {
            title: "StealhScribe - A Decentralized News Platform Powered by IPFS",
            description: "PERMANENT, ANONYMOUS, UNFILTERED. Leveraging bleeding edge peer-to-peer file sharing technology, StealthScribe allows users from anywhere on (or off) the planet to share news or information easily.",
            image: "/favicon.png",
            link: "https://github.com/StephenSulimani/UGAHacksX",
            tags: ["Svelte", "TypeScript", "IPFS", "Docker", "MongoDB", "Prisma"]
        },
        {
            title: "USLA Reference Data Application",
            description: "A Streamlit CRUD Application implemented in Snowflake to handle United States Loss Adjusting reference data for Crawford and Company.",
            image: "/favicon.png",
            link: "https://github.com/haydencrane28/USLA-Reference-Data",
            tags: ["Python", "Streamlit", "SQL", "Snowflake"]
        },
    ];
</script>

<div class="bg-sky-950 flex flex-col items-center py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6">
        <h1 class="text-sky-300 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h1>
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