import { useReducedMotion } from "framer-motion";

export function useReveal(amount = 0.25) {
    const reduce = useReducedMotion();
    return {
        initial: { opacity: 0, y: reduce ? 0 : 26 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount },
        transition: { duration: 0.55, ease: "easeOut" },
    };
}

export function useRevealLeft(amount = 0.3) {
    const reduce = useReducedMotion();
    return {
        initial: { opacity: 0, x: reduce ? 0 : -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount },
        transition: { duration: 0.6, ease: "easeOut" },
    };
}

export function useRevealRight(amount = 0.3) {
    const reduce = useReducedMotion();
    return {
        initial: { opacity: 0, x: reduce ? 0 : 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount },
        transition: { duration: 0.6, ease: "easeOut" },
    };
}