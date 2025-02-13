<script lang="ts">
    let experiences = [
        {
            title: "Enterprise Architect Intern",
            company: "Crawford & Company",
            description: "Developed and maintained a Streamlit CRUD application in Python to handle United States Loss Adjusting reference data in Snowflake.",
        },
        {
            title: "Vice President of Internal Affairs",
            company: "Kappa Theta Pi, Professional Technology Fraternity",
            description: "Managed the internal affairs of the fraternity, including the recruitment process, professional development, and alumni relations.",
        }
    ]
</script>

<div class="bg-sky-950 text-sky-200 flex flex-col items-center py-12 md:py-24 lg:py-32">
    <h1 class="text-sky-300 mb-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Experience</h1>
    {#each experiences as experience}
        <div class="items-left mb-5">
            <h2 class="text-xl">{experience.title}</h2>
            <h3 class="text-lg">{experience.company}</h3>
            <p class="text-md">{experience.description}</p>
        </div>
    {/each}
</div>
