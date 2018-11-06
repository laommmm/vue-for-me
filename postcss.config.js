module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false
    },
    "postcss-viewport-units": {},
    cssnano: {
      assets: "default"
    },
    "postcss-sorting": {
      order: [
        "custom-properties",
        "dollar-variables",
        "declarations",
        "rules",
        "at-rules"
      ],
      "properties-order": [
        "display",
        "position",
        "float",
        "clear",
        "visibility",
        "overflow",
        "width",
        "height",
        "margin",
        "padding",
        "border",
        "background",
        "color",
        "font",
        "text-decoration",
        "text-align",
        "vertical-align",
        "white-space",
        "break-word",
        "z-index",
        "opacity",
        "content",
        "cursor"
      ],
      "unspecified-properties-position": "bottom"
    }
  }
};
