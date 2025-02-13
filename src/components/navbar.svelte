 <script lang="ts">
    import { Navigation2Icon } from 'lucide-svelte';
    import Logo from '../lib/portfolio-brandmark.png'
 </script>

<nav >
    <div class="bg-sky-950/50 backdrop-blur-md flex z-50 items-center justify-center space-x-150 px-2 sm:px-4 py-1 fixed w-full top-0 start-0">
        <a href="/" class="flex">
            <img src={Logo} class="me-3 h-20" alt="Logo" />
            <span class="self-center whitespace-nowrap text-xl font-bold dark:text-white">Hayden Crane</span>
        </a>
        <div class="flex items-center space-x-6 font-medium text-white " >
            <a href="#about" class="hover:text-cyan-300">About</a>
            <a href="#projects" class="hover:text-cyan-300">Projects</a>
            <a href="#contact" class="hover:text-cyan-300">Contact</a>
            </div>
    </div>
</nav>
