 <script lang="ts">
    import { Navigation2Icon } from 'lucide-svelte';
    import "@fontsource/audiowide";
    import Logo from '$lib/logo.webp';
 </script>

<nav>
    <div class="font-bold shadow h-16 bg-sky-950/50 backdrop-blur-md flex z-50 items-center justify-center lg:space-x-140 sm:space-x-50 px-2 sm:px-4 py-1 fixed w-full top-0 start-0">
        <a href="/" class="hidden sm:flex items-center">
            <img src={Logo} class="me-3 h-8 sm:h-6" alt="Logo" />
            <span class="self-center whitespace-nowrap text-xl text-white">Hayden Crane</span>
        </a>
        <div class="flex items-center space-x-6 text-white " >
            <a href="#experience" class="hover:text-sky-200">Experience</a>
            <a href="#projects" class="hover:text-sky-200">Projects</a>
            <a href="#contact" class="hover:text-sky-200">Contact</a>
        </div>

    </div>
</nav>
