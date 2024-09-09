<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black">
        <div class="text-white text-lg font-mono" ref="preloader">
            <pre v-for="(line, index) in asciiLines" :key="index" class="animation-line">{{ line }}</pre>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';

export default {
    data() {
        return {
            asciiLines: [
                'Loading...',
                'Loading.',
                'Loading..',
                'Loading...',
            ],
        };
    },
    mounted() {
        this.animateLines();
    },
    methods: {
        animateLines() {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

            this.$refs.preloader.querySelectorAll('.animation-line').forEach((line, index) => {
                tl.fromTo(line,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.5, delay: index * 0.5 })
                    .to(line, { opacity: 0, duration: 0.5 }, "+=0.5");
            });
        }
    }
};
</script>

<style scoped>
.animation-line {
    white-space: nowrap;
}
</style>
