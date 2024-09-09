<template>
    <div ref="cursor" class="custom-cursor">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path ref="cursorPath" d="M12 2L12 22M2 12L22 12" stroke="currentColor" stroke-width="2"
                stroke-linecap="square" stroke-linejoin="square" />
        </svg>
    </div>
</template>

<script>
import gsap from "gsap";

export default {
    mounted() {
        window.addEventListener("mousemove", this.moveCursor);
        window.addEventListener("mouseenter", this.fadeInCursor);
        window.addEventListener("mouseleave", this.fadeOutCursor);

        // Add event listeners for all elements to check for clickable elements
        document.querySelectorAll("*").forEach((element) => {
            element.addEventListener("mouseover", this.checkCursor);
            element.addEventListener("mouseleave", this.resetCursor);
        });
    },
    beforeDestroy() {
        window.removeEventListener("mousemove", this.moveCursor);
        window.removeEventListener("mouseenter", this.fadeInCursor);
        window.removeEventListener("mouseleave", this.fadeOutCursor);

        // Remove event listeners for all elements
        document.querySelectorAll("*").forEach((element) => {
            element.removeEventListener("mouseover", this.checkCursor);
            element.removeEventListener("mouseleave", this.resetCursor);
        });
    },
    methods: {
        moveCursor(event) {
            const cursor = this.$refs.cursor;
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
        },
        checkCursor(event) {
            const target = event.target;
            const isClickable = target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.tagName === 'SELECT' ||
                target.hasAttribute('tabindex');

            if (isClickable) {
                gsap.to(this.$refs.cursorPath, {
                    attr: { d: "M4 4H20V20H4Z" }, // Square path data
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        },
        resetCursor() {
            gsap.to(this.$refs.cursorPath, {
                attr: { d: "M12 2L12 22M2 12L22 12" }, // Plus sign path data
                duration: 0.3,
                ease: "power2.out",
            });
        },
        fadeInCursor() {
            gsap.to(this.$refs.cursor, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        },
        fadeOutCursor() {
            gsap.to(this.$refs.cursor, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        },
    },
};
</script>

<style scoped>
.custom-cursor {
    position: fixed;
    width: auto;
    height: auto;
    color: #fff;
    mix-blend-mode: difference;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;
    opacity: 1;
    transition: transform 0.1s ease, opacity 0.3s ease;
}

.custom-cursor svg {
    display: block;
    width: 30px;
    height: 30px;
}
</style>
