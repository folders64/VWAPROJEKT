<template>
    <div class="text-white">
        <main>
            <NuxtPage />
        </main>
        <StickyFooter />
    </div>
</template>

<script>
import StickyFooter from '~/components/StickyFooter.vue'; // Adjust the path as needed

export default {
    components: {
        StickyFooter
    }
}
</script>
