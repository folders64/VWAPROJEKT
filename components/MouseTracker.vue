<template>
    <!--
    <div class="w-[100px] border border-white px-1 text-center">
        <p>{{ formattedMouseX }} {{ formattedMouseY }}</p>
    </div>
    -->
    <div>
        <p>{{ formattedMouseX }} {{ formattedMouseY }}</p>
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

<style scoped>
/* No additional styles needed here */
</style>
