export const aboutText = {
    hidden: {
        opacity: 0,
        x: -80
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.3,
            ease: "easeOut"
        }
    }
};

export const aboutImage = {
    hidden: {
        opacity: 0,
        x: 80,
        rotate: 3
    },
    visible: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
            duration: 1.5,
            ease: "easeOut"
        }
    }
};

export const listContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export const listItem = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
};

export const imageCard = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.8,
            duration: 1
        }
    }
};

export const titleLine = {
    hidden: {
        width: 0
    },
    visible: {
        width: 120,
        transition: {
            duration: 1.5
        }
    }
};