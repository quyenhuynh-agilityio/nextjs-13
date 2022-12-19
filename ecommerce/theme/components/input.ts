export const Input = {
  baseStyle: {
    field: {
      fontWeight: 400,
    },
  },

  sizes: {
    xl: {
      field: {
        height: { sm: "40px", md: "50px" },
        borderRadius: "4px",
        fontSize: "base",
        p: { sm: "5px", md: "7px" },
      },
    },
  },

  variants: {
    outline: {
      field: {
        border: "1px solid",
        _focus: {
          borderColor: "borderColor.100",
          boxShadow: "none",
        },
      },
    },
  },
};
