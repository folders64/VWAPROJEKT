<!-- MouseTracker.vue -->
<template>
    <div>
        <p ref="mousePosition">{{ formattedMouseX }} {{ formattedMouseY }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mouseX: 0,
            mouseY: 0,
        };
    },
    computed: {
        formattedMouseX() {
            return this.mouseX.toString().padStart(4, '0');
        },
        formattedMouseY() {
            return this.mouseY.toString().padStart(4, '0');
        }
    },
    methods: {
        updateMousePosition(event) {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        },
    },
    mounted() {
        window.addEventListener("mousemove", this.updateMousePosition);
    },
    beforeDestroy() {
        window.removeEventListener("mousemove", this.updateMousePosition);
    },
};
</script>
