<script lang="ts">
    import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<main class="bg-sky-950 flex flex-col items-center justify-center w-full mx-auto pt-40"> 
    <div class="mt-10 flex flex-col items-center justify-center w-1/2 relative">
        <h1 class="text-sky-300 mb-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none relative group">
            Hi, I'm <span class="relative inline-block transition-opacity duration-300 group-hover:opacity-0">Hayden</span>
            <span class="absolute sm:left-28 md:left-35 lg:left-45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">nedyah</span> 
        </h1>
        <p class="text-sky-200 mb-5 text-3xl font-medium tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl/none">
            I'm a software engineer and student at the University of Georgia.
        </p>
        <p class="mx-auto max-w-[700px] text-sky-100 md:text-xl">
            I'm passionate about building cool shit.
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