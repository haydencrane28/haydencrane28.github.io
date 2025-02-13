<script lang="ts">
    import Navbar from "../components/navbar.svelte";
    import Intro from "../components/intro.svelte";
    import Experience from "../components/experience.svelte";
    import Projects from "../components/projects.svelte";
    import TechStack from "../components/tech-stack.svelte";
    import Footer from "../components/footer.svelte";
    import Contact from "../components/contact.svelte";
</script>

<div class="custom-font">
    <Navbar /> 
    <Intro />
    <section id="about" class="scroll-mt-6 sm:scroll-mt-2">
        <Experience />
    </section> 
    <section id="projects" class="scroll-mt-6">
        <Projects />
    </section>
    <TechStack />
    <section id="contact" class="scroll-mt-6">
        <Contact />
    </section>
    <Footer />
</div>

<style>
    .custom-font {
        font-family: 'Audiowide', sans-serif;
    }   
</style>
