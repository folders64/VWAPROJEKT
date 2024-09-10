<template>
    <div ref="container" class="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <div v-for="(symbol, index) in symbols" :key="index"
            class="absolute text-white opacity-0 transition-all duration-1000 ease-out"
            :style="{ left: `${symbol.x}px`, top: `${symbol.y}px` }">
            {{ symbol.char }}
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref(null)
const symbols = ref([])
const chars = '01'
let isMouseDown = false
let lastX = 0
let lastY = 0

const createSymbol = (x, y) => {
    const char = chars[Math.floor(Math.random() * chars.length)]
    const symbol = { x, y, char, element: null }
    symbols.value.push(symbol)

    setTimeout(() => {
        if (symbol.element) {
            symbol.element.style.transform = `translateY(-100px) rotate(${Math.random() * 360}deg)`
            symbol.element.style.opacity = '0'
        }
    }, 10)

    setTimeout(() => {
        symbols.value = symbols.value.filter(s => s !== symbol)
    }, 1000)
}

const handleMouseMove = (e) => {
    if (isMouseDown) {
        const x = e.clientX
        const y = e.clientY
        const distance = Math.sqrt(Math.pow(x - lastX, 2) + Math.pow(y - lastY, 2))

        if (distance > 10) {
            createSymbol(x, y)
            lastX = x
            lastY = y
        }
    }
}

const handleMouseDown = (e) => {
    isMouseDown = true
    lastX = e.clientX
    lastY = e.clientY
}

const handleMouseUp = () => {
    isMouseDown = false
}

onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mousedown', handleMouseDown)
    document.removeEventListener('mouseup', handleMouseUp)
})
</script>