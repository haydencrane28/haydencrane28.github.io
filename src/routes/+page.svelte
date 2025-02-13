<script lang="ts">
    import Navbar from "../components/navbar.svelte";
    import Intro from "../components/intro.svelte";
    import Projects from "../components/projects.svelte";
    import TechStack from "../components/tech-stack.svelte";
    import Footer from "../components/footer.svelte";
    import Contact from "../components/contact.svelte";
</script>

<div>
    <Navbar /> 
    <section id="about">
        <Intro />
    </section> 
    <section id="projects">
        <Projects />
    </section>
    <TechStack />
    <section id="contact">
        <Contact />
    </section>
    <Footer />
</div>


