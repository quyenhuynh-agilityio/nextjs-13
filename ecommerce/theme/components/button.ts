export const Button = {
  baseStyle: {
    field: {
      fontWeight: 400,
      borderRadius: "md",
    },
  },

  sizes: {
    sm: {
      h: "8",
      minW: "8",
      fontSize: "lg",
      px: "6",
    },
    md: {
      h: "10",
      minW: "10",
      fontSize: "lg",
      px: "5",
    },
  },

  variants: {
    primary: {
      bg: "textColor.100",
      color: "primary.main",
      _hover: {
        opacity: "0.8",
      },
      borderColor: "primary.main",
      border: "1px solid",
    },
    secondary: {
      bg: "primary.main",
      color: "textColor.100",
      border: "1px solid",
    },
  },
};
