<script lang="ts">
    const technologies =[
        {
            category: "Frontend",
            skills: ["Svelte, TypeScript, TailwindCSS, Streamlit"]
        },
        {
            category: "Backend",
            skills: ["Python, Java, SQL, C"]
        },
        {
            category: "DevOps",
            skills: ["Git, Snowflake"]
        },
        {
            category: "Tools",
            skills: ["VSCode, REST APIs, Matlab"]
        }                   
    ];
</script>

<div class="bg-sky-950 flex flex-col items-center py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6">
        <h2 class="text-sky-300 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center" >Tech Stack</h2>
        <div class=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {#each technologies as tech}
                <div class="shadow bg-sky-200 border rounded-md p-6">
                    <h2 class="text-sky-900 text-lg font-semibold mb-4">{tech.category}</h2>
                    <ul class="text-sky-900 flex flex-wrap gap-2">
                        {#each tech.skills as skill}
                            <li class="shadow inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                                {skill}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</div>