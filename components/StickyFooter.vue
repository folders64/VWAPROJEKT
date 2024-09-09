<template>
    <footer class="bg-black text-white text-sm py-4 px-4 fixed bottom-0 w-full uppercase hidden md:block">
        <div class="relative h-full pb-4">
            <!-- Color Mode Display (left-aligned) -->
            <div class="absolute left-0 bottom-0">
                <p class="text-left">
                    <span ref="colorModeLabel">color_mode:</span>
                    <br />
                    <span ref="colorModeValue">{{ $colorMode.preference }}</span>
                    <br />
                    <span ref="colorModeDetected" v-if="$colorMode.preference === 'system'">
                        (<i>{{ $colorMode.value }}</i> mode detected)
                    </span>
                </p>
            </div>

            <!-- Copyright Info (centered) -->
            <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 text-center">
                <p ref="copyrightText">&copy; 2024 yal b hatin too muh imma log of fo a year</p>
            </div>

            <!-- Mouse Tracker (right-aligned) -->
            <div class="absolute right-1 bottom-0" ref="mouseTrackerContainer">
                <MouseTracker ref="mouseTracker" />
            </div>
        </div>
    </footer>
</template>

<script>
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import MouseTracker from '~/components/MouseTracker.vue';

export default {
    components: {
        MouseTracker
    },
    data() {
        return {
            isLoading: true,
        };
    },
    mounted() {
        this.startAnimations();
    },
    methods: {
        startAnimations() {
            // Simulate loading time
            gsap.to(this.$refs.preloader, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    this.isLoading = false;
                    this.animateFooterText(); // Start animations after loading completes
                }
            });
        },
        animateFooterText() {
            // Typewriter effect for colorModeLabel
            gsap.fromTo(this.$refs.colorModeLabel,
                { text: '' },
                { text: 'color_mode:', duration: 1, ease: 'power1.out', delay: 2 }
            );

            // Typewriter effect for colorModeValue
            gsap.fromTo(this.$refs.colorModeValue,
                { text: '' },
                { text: this.$colorMode.preference, duration: 0.5, ease: 'power1.out', delay: 3 }
            );

            // Typewriter effect for colorModeDetected
            if (this.$colorMode.preference === 'system') {
                gsap.fromTo(this.$refs.colorModeDetected,
                    { text: '' },
                    { text: `(${this.$colorMode.value} mode detected)`, duration: 1.5, ease: 'power1.out', delay: 4 }
                );
            }

            // Typewriter effect for copyrightText
            gsap.fromTo(this.$refs.copyrightText,
                { text: '' },
                { text: '&copy; 2024 yal b hatin too muh imma log of fo a year', duration: 2, ease: 'power1.out', delay: 3 }
            );

            // Typewriter effect for mousePosition text
            this.$nextTick(() => {
                gsap.fromTo(this.$refs.mouseTracker.$refs.mousePosition,
                    { text: '' },
                    { text: `0000 0000`, duration: 0.5, ease: 'power1.out'}
                );
            });
        }
    }
};
gsap.registerPlugin(TextPlugin);
</script>
