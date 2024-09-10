<template>
    <div @mousemove="moveCursor" @click="spawnAsciiAtCursor" class="relative w-full h-screen">
        <!-- Cursor Trail -->
        <div ref="cursor" class="fixed pointer-events-none custom-cursor">
            <span v-for="(symbol, index) in asciiSymbols" :key="index" class="ascii-symbol"
                :style="{ left: symbol.x + 'px', top: (symbol.y - 20) + 'px' }">
                {{ symbol.symbol }}
            </span>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";

export default {
    data() {
        return {
            cursorPos: { x: 0, y: 0 }, // Mouse cursor position
            asciiSymbols: [], // Array of ASCII symbols
        };
    },
    mounted() {
        // Listen for mouse movement
        window.addEventListener("mousemove", this.moveCursor);
    },
    methods: {
        moveCursor(event) {
            // Update cursor position based on mouse movement
            this.cursorPos.x = event.clientX;
            this.cursorPos.y = event.clientY;
        },
        spawnAsciiAtCursor() {
            const randomAscii = String.fromCharCode(33 + Math.floor(Math.random() * 94)); // Generate random ASCII symbol
            const symbolObj = {
                symbol: randomAscii,
                x: this.cursorPos.x,
                y: this.cursorPos.y - 20, // Spawn 20px above the cursor
            };

            // Add the symbol to the array
            this.asciiSymbols.push(symbolObj);
            const symbolIndex = this.asciiSymbols.length - 1;

            // Animate symbol upward with flame-like effect
            const newSymbol = this.$el.querySelectorAll('.ascii-symbol')[symbolIndex];
            gsap.to(newSymbol, {
                y: -100, // Move upwards
                opacity: 0, // Fade out
                duration: 2, // Duration of animation
                ease: "power2.out",
                onComplete: () => {
                    this.asciiSymbols.splice(symbolIndex, 1); // Remove symbol after animation completes
                }
            });
        }
    }
};
</script>

<style scoped>
.custom-cursor {
    position: fixed;
    pointer-events: none;
    z-index: 9999;
}

.ascii-symbol {
    position: absolute;
    font-size: 20px;
    color: #ff6600;
    /* Flame-like color */
    transform: translate(-50%, -50%);
}
</style>
