 <script lang="ts">
    import { Navigation2Icon } from 'lucide-svelte';
import Logo from '../lib/portfolio-brandmark.png'
 </script>

<nav class="mb-40">
    <div class="flex z-20 bg-sky-950 items-center justify-between px-2 sm:px-4 py-1 fixed w-full top-0 start-0 border-b">
        <a href="/" class="flex">
            <img src={Logo} class="me-3 h-20" alt="Logo" />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Hayden Crane</span>
        </a>
        <div class="flex items-center space-x-6 font-medium text-white " >
            <a href="/" class="hover:text-cyan-300">Home</a>
            <a href="/" class="hover:text-cyan-300">About</a>
            <a href="/" class="hover:text-cyan-300">Blog</a>
            <a href="/" class="hover:text-cyan-300">Contact</a>
            </div>
    </div>
</nav>
