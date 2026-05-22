export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
        },
    },
};

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        },
    },
};

export const fadeRight = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        },
    },
};