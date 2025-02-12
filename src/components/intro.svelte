<script lang="ts">
    import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<main class=" flex flex-col items-center justify-center w-full mx-auto"> 
    <div class="flex flex-col items-center justify-center w-1/2 relative">
        <h1 class="mb-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Hi, I'm Hayden 
        </h1>
        <p class="mb-5 text-3xl font-medium tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl/none">
            I'm a software engineer and student at the University of Georgia.
        </p>
        <p class="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-600">
            I'm passionate about building cool shit.
        </p>
        <div class="flex mt-4 righ-4 space-x-4">
            <a href="https://github.com/haydencrane28" target="_blank" aria-label="GitHub">
            <Github size={30} class="border" />
            </a>
            <a href="https://www.linkedin.com/in/hayden-crane-compsci" target="_blank" aria-label="LinkedIn">
            <Linkedin size={30} class="border" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=haydenmcrane28@gmail.com" target="_blank" aria-label="LinkedIn">
                <Mail size={30} class="border" />
                </a>
        </div>
    </div>
</main>