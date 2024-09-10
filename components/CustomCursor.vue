<template>
    <div ref="cursor" class="custom-cursor" :style="{ opacity: cursorOpacity }">
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle ref="largeCircle" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
            <circle ref="smallCircle" cx="12" cy="12" r="0" stroke="currentColor" stroke-width="2" />
        </svg>
    </div>
</template>

<script>
import gsap from "gsap";

export default {
    data() {
        return {
            smallCircleVisible: false,
            cursorOpacity: 0, // init opacity for cursor
        };
    },
    mounted() {
        this.updateCursorPosition({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 }); // Center cursor on mount

        window.addEventListener("mousemove", this.moveCursor);
        window.addEventListener("mouseenter", this.fadeInCursor);
        window.addEventListener("mouseleave", this.fadeOutCursor);
        window.addEventListener("mousedown", this.onMouseDown);
        window.addEventListener("mouseup", this.onMouseUp);
        window.addEventListener("mouseout", this.handleMouseOut);
        window.addEventListener("mouseover", this.handleMouseOver);
        window.addEventListener("mousemove", this.handleMouseMove); // initial cursor position

        document.querySelectorAll("*").forEach((element) => {
            element.addEventListener("mouseover", this.checkCursor);
            element.addEventListener("mouseleave", this.resetCursor);
        });
    },
    beforeDestroy() {
        window.removeEventListener("mousemove", this.moveCursor);
        window.removeEventListener("mouseenter", this.fadeInCursor);
        window.removeEventListener("mouseleave", this.fadeOutCursor);
        window.removeEventListener("mousedown", this.onMouseDown);
        window.removeEventListener("mouseup", this.onMouseUp);
        window.removeEventListener("mouseout", this.handleMouseOut);
        window.removeEventListener("mouseover", this.handleMouseOver);
        window.removeEventListener("mousemove", this.handleMouseMove);

        document.querySelectorAll("*").forEach((element) => {
            element.removeEventListener("mouseover", this.checkCursor);
            element.removeEventListener("mouseleave", this.resetCursor);
        });
    },
    methods: {
        moveCursor(event) {
            this.updateCursorPosition(event);
        },
        updateCursorPosition(event) {
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
                this.smallCircleVisible = true;
                gsap.to(this.$refs.largeCircle, {
                    r: 3,
                    duration: 0.3,
                    ease: "power3.out",
                });
                gsap.to(this.$refs.smallCircle, {
                    r: 10,
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: "power3.out",
                });
            } else {
                this.smallCircleVisible = false;
            }
        },
        resetCursor() {
            gsap.to(this.$refs.largeCircle, {
                r: 10,
                duration: 0.3,
                ease: "power3.out",
            });
            gsap.to(this.$refs.smallCircle, {
                r: 0,
                opacity: 0,
                scale: 1,
                duration: 0.3,
                ease: "power3.out",
            });
            this.smallCircleVisible = false;
        },
        fadeInCursor() {
            this.cursorOpacity = 1;
            gsap.to(this.$refs.cursor, {
                opacity: 1,
                duration: 0.05,
                ease: "power4.out",
            });
        },
        fadeOutCursor() {
            this.cursorOpacity = 0;
            gsap.to(this.$refs.cursor, {
                opacity: 0,
                duration: 0.05,
                ease: "power4.out",
            });
        },
        onMouseDown() {
            gsap.to(this.$refs.largeCircle, {
                r: 5,
                duration: 0.2,
                ease: "power3.out",
            });
            gsap.to(this.$refs.smallCircle, {
                r: 5,
                duration: 0.2,
                ease: "power3.out",
            });
        },
        onMouseUp() {
            if (this.smallCircleVisible) {
                gsap.to(this.$refs.largeCircle, {
                    r: 10,
                    duration: 0.2,
                    ease: "power3.out",
                });
                gsap.to(this.$refs.smallCircle, {
                    r: 3,
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                    ease: "power3.out",
                });
            } else {
                gsap.to(this.$refs.largeCircle, {
                    r: 10,
                    duration: 0.2,
                    ease: "power3.out",
                });
                gsap.to(this.$refs.smallCircle, {
                    r: 0,
                    opacity: 0,
                    scale: 1,
                    duration: 0.2,
                    ease: "power3.out",
                });
            }
        },
        handleMouseOut() {
            gsap.to(this.$refs.cursor, {
                opacity: 0,
                duration: 0.1,
                ease: "power4.out",
            });
        },
        handleMouseOver() {
            gsap.to(this.$refs.cursor, {
                opacity: 1,
                duration: 0.1,
                ease: "power4.out",
            });
        },
        handleMouseMove(event) {
            this.updateCursorPosition(event);
            if (this.cursorOpacity === 0) {
                this.fadeInCursor();
            }
        },
    }

};
</script>

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