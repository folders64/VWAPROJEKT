<template>
    <footer class="bg-black text-white text-sm py-4 px-4 fixed bottom-0 w-full uppercase hidden md:block">
        <div class="relative h-full pb-4">
            <!-- Color Mode Display (left-aligned) -->
            <div class="absolute left-0 bottom-1">
                <p class="text-left">
                    <span>color_mode:</span>
                    <br />
                    <span>{{ $colorMode.preference }}</span>
                    <br />
                    <span v-if="$colorMode.preference === 'system'">
                        (<i>{{ $colorMode.value }}</i> mode detected)
                    </span>
                </p>
            </div>

            <!-- Copyright Info (centered) -->
            <div class="absolute left-1/2 transform -translate-x-1/2 bottom-1 text-center">
                <p>&copy; 2024 yal b hatin too muh imma log of fo a year</p>
            </div>

            <!-- Mouse Tracker (right-aligned) -->
            <div class="absolute right-1 bottom-1">
                <MouseTracker />
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* Scoped styles if needed */
</style>
