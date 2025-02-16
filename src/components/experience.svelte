<script lang="ts">
    let experiences = [
        {
            title: "Enterprise Architect Intern",
            company: "Crawford & Company",
            description: [
                "Developed and deployed a CRUD application in Python using Streamlit, integrated with Snowflake to manage and store over 100 records of US loss adjusting reference data.",
                "Evaluated emerging technologies like AI tools, offering strategic insights aligned with the company’s goals for enhancing enterprise architecture.",
                "Supported the development of comprehensive architectural documentation, including diagrams to ensure clarity and coherence in system design.",
                "Collaborated with IT leaders in regularly scheduled meetings, enhancing communication, problem-solving, and teamwork skills by gathering insights and aligning on project goals.",
            ],
       },
        {
            title: "Vice President of Internal Affairs",
            company: "Kappa Theta Pi, Professional Technology Fraternity",
            description: [
                "Lead internal operations, fostering collaboration among members of a 50+ member organization.",
                "Oversee administrative tasks, including meeting scheduling, attendance tracking, and event planning.",
                "Maintain strong internal relations by addressing member concerns and improving the overall fraternity experience.",
            ],
        }
    ]
</script>

<div class="w-3/4 bg-sky-950 text-sky-200 flex flex-col items-center justify-center mx-auto py-12 md:py-24 lg:py-32">
    <h1 class="font-bold text-sky-300 mb-3 text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">Experience</h1>
    {#each experiences as experience}
        <div class="w-full text-left mb-10">
            <h2 class="text-xl mb-3">{experience.title}</h2>
            <h3 class="text-lg mb-3">{experience.company}</h3>
            <ul class="list-disc list-inside text-md text-sky-100">
                {#each experience.description as point}
                    <li class="mb-3">{point}</li>
                {/each} 
            </ul>
        </div>
    {/each}
</div>

