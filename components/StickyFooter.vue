<template>
    <footer class="dark:text-white text-black text-sm py-4 px-4 fixed bottom-0 w-full uppercase hidden md:block">
        <div class="relative h-full pb-4">
            <!-- Color Mode Display (left-aligned) -->
            <div class="absolute left-0 bottom-0">
                <p class="text-left">
                    <span>color_mode:</span>
                    <br />
                    <span>{{ $colorMode.preference }}</span>
                    <br />
                    <span v-if="$colorMode.preference === 'system'">
                        (<i>{{ $colorMode.value }}</i> mode detected)
                    </span>
                    <span v-if="$colorMode.value === 'light'"
                        class="text-red-500">
                        please save your eyes and switch to dark mode
                    </span>
                    <!--
                    <span v-if="$colorMode.preference === 'system'">
                        (<i>{{ $colorMode.value }}</i> mode detected)
                        <span v-if="$colorMode.value === 'light'" @click="forceDarkMode"
                            class="cursor-pointer text-blue-500 hover:underline">
                            please switch back to dark mode
                        </span>
                        <span v-if="$colorMode.value === 'dark'" @click="forceLightMode"
                            class="cursor-pointer text-blue-500 hover:underline">
                            switch back to light mode
                        </span>
                    </span>
                    <span v-else>
                        (<span v-if="$colorMode.preference !== 'system'" style="font-weight: bold;">forced </span>
                        <i>{{ $colorMode.value }}</i> mode detected)
                    </span>
                    -->
                </p>
            </div>

            <!-- Mouse Tracker (right-aligned) -->
            <div class="absolute right-1 bottom-0 text-right">
                <a href="https://github.com/folders64/VWAPROJEKT">[•]</a>
                <MouseTracker />
            </div>
        </div>
    </footer>
</template>
<!--
<script>
export default {
    methods: {
        forceDarkMode() {
            // Set the color mode preference to 'dark'
            this.$colorMode.preference = 'dark';
        },
        forceLightMode() {
            // Set the color mode preference to 'light'
            this.$colorMode.preference = 'light';
        }
    }
};
</script>
-->
<style scoped>
.custom-cursor {
    position: fixed;
    width: auto;
    height: auto;
    mix-blend-mode: difference;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;
    opacity: 1;
    transition: transform 0.1s ease, opacity 0.3s ease;
}

.dark-mode .custom-cursor {
    color: #fff;
}

.custom-cursor svg {
    display: block;
    width: 25px;
    height: 25px;
}
</style>
