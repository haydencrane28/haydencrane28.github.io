<script lang="ts">
    import Navbar from "../components/navbar.svelte";
    import Intro from "../components/intro.svelte";
    import Experience from "../components/experience.svelte";
    import Projects from "../components/projects.svelte";
    import TechStack from "../components/tech-stack.svelte";
    import Footer from "../components/footer.svelte";
    import Contact from "../components/contact.svelte";
</script>

<div class="bg-sky-950 custom-font">
    <Navbar />
    <Intro />
    <section id="experience" class="scroll-mt-8">
        <Experience />
    </section> 
    <section id="projects" class="scroll-mt-24">
        <Projects />
    </section>
    <TechStack />
    <section id="contact" class="scroll-mt-6 mb-24">
        <Contact />
    </section>
    <section>
        <Footer />
    </section>
</div>

<style>
    .custom-font {
        font-family: 'Space Grotesk Variable', sans-serif;
        font-weight: 500;
    }   
</style>
