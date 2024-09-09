<template>
    <div class="text-white">
        <Preloader v-if="isLoading" />
        <main>
            <NuxtPage />
        </main>
        <CustomCursor />
        <StickyFooter />
    </div>
</template>

<script>
import Preloader from '~/components/Preloader.vue';

export default {
    components: {
        Preloader
    },
    data() {
        return {
            isLoading: true,
        };
    },
    mounted() {
        // Simulate loading time
        setTimeout(() => {
            this.isLoading = false;
        }, 5000); // Adjust the time to your needs
    }
};
</script>

<style>
/* Additional global styles */
</style>