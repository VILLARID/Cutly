export const aboutContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export const aboutText = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
};

export const aboutImage = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 1.1,
            ease: "easeOut",
        },
    },
};

export const listItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const imageCard = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: 0.4,
            duration: 0.6,
        },
    },
};

export const titleLine = {
    hidden: { width: 0 },
    visible: {
        width: 100,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};