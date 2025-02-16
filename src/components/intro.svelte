<script lang="ts">
    import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<main class="bg-sky-950 flex flex-col items-center justify-center w-full mx-auto sm:pt-30 pt-20"> 
    <div class="mt-10 flex flex-col items-center justify-center w-3/4 relative">
        <h1 class="font-bold text-sky-300 mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none relative group">
            Hi, I'm <span class="relative inline-block transition-opacity duration-300 group-hover:opacity-0">Hayden</span>
            <span class="absolute sm:left-28 md:left-35 lg:left-45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">nedyah</span> 
        </h1>
        <p class="text-sky-200 mb-2 text-3xl sm:text-2xl md:text-4xl lg:text-4xl/none">
            Software Engineer | Student at the University of Georgia
        </p>
        <p class="mx-auto max-w-[700px] text-sky-100 md:text-xl">
            I thrive at the intersection of software and hardware, where innovation pushes boundaries and turns ideas into reality. The challenge of building seamless, high-performance systems captivates me, and I’m always seeking ways to refine, optimize, and create. Beyond tech, I bring the same drive for precision and mastery to Brazilian Jiu-Jitsu and strength training. I crave intensity—whether it’s on the mat, in the gym, or tearing through snow and dirt on a snowboard or dirt bike. Naturally, this has fueled my love for Red Bull, a brand that embodies fearless ambition. At my core, I’m obsessed with understanding the mind—how we think, adapt, and break limits. That relentless curiosity fuels everything I do.
        </p>
        <div class="flex mt-4 righ-4 space-x-4">
            <a href="https://github.com/haydencrane28" target="_blank" aria-label="GitHub">
            <Github size={30} class="border text-sky-100 bg-zinc-900" />
            </a>
            <a href="https://www.linkedin.com/in/hayden-crane-compsci" target="_blank" aria-label="LinkedIn">
            <Linkedin size={30} class="border text-sky-100 bg-zinc-900" />
            </a>
            <a href="mailto:haydenmcrane28@gmail.com" target="_blank" aria-label="Email">
                <Mail size={30} class="border text-sky-100 bg-zinc-900" />
            </a>
        </div>
    </div>
</main>