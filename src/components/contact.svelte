<script lang="ts">
    let pending = false;
    let message = "";

    async function submitContactForm(formData: FormData) {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const name = formData
        const email = formData.get("email");
        const message = formData.get("message");

        return { message: "Thanks for your message! I'll get back to you soon." };
    }

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        pending = true;

        try {
            const response = await submitContactForm(formData);
            message = response.message;
        } catch (error) {
            message = (error as Error).message;
        } finally {
            pending = false;
        }
    }
</script>

<div class="bg-sky-950 flex flex-col items-center py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6">
        <div class="mx-auto max-w-2xl">
            <h2 class="text-sky-300 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
            </h2>
            <div class="bg-sky-200 text-sky-900 border rounded-md p-6">
                
                    <form on:submit={handleSubmit}>
                        <div class="items-center space-y-4">
                            <div>
                                <label for="name" class="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input type="text" id="name" class="border rounded-sm w-full"/>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input type="email" id="email" class="border rounded-sm w-full"/>
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea id="message" class="border rounded-sm w-full"></textarea>
                            </div>
                            <button type="submit" class="border rounded-sm hover:text-black-200" disabled={pending}>
                                {pending ? "Sending..." : "Send Message"}
                            </button>
                            {#if message}
                                <p class="text-sm text-center mt-4 text-muted-foreground">{message}</p>
                            {/if}
                        </div>
                    </form>
                
            </div>
        </div>  
    </div>
</div>