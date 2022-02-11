module.exports = {
    content: ["./*.{html,css}"],
    theme: {
        colors: {
            cyan: "#73daca",
            orange1: "#ff9e64",
            orange2: "#e0af68",
            green: "#9ece6a",
            l_blue: "#b4f9f8",
            d_blue: "#2ac3de",
            red: "#f7768e",
            green: "#c9d05c",
            white: "#eeeeee",
            grey: "#eeeeee",
            milk: "#FFFFFF",
            black: "#414868",
            d_black: "#24283b",
        },

        extend: {
            animation: {
                "gradient-x": "gradient-x 10s ease infinite",
                "gradient-y": "gradient-y 10s ease infinite",
                "gradient-xy": "gradient-xy 10s ease infinite",
            },
            keyframes: {
                "gradient-y": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "center top",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "center center",
                    },
                },
                "gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                "gradient-xy": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "center center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                    "25%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                },
            },
        },
    },
};
