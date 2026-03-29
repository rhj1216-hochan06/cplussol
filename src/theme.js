import { alpha, createTheme } from "@mui/material/styles";

const baseTheme = createTheme();

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f172a",
      light: "#334155",
      dark: "#020617",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#dc2626",
      light: "#f87171",
      dark: "#991b1b",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f4f7fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
    divider: alpha("#0f172a", 0.08),
    success: {
      main: "#0f766e",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily:
      '"Manrope", "Noto Sans KR", "Pretendard Variable", "Apple SD Gothic Neo", sans-serif',
    h1: {
      fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontSize: "clamp(2rem, 4vw, 3.25rem)",
      fontWeight: 800,
      lineHeight: 1.12,
      letterSpacing: "-0.035em",
    },
    h3: {
      fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
      fontWeight: 800,
      lineHeight: 1.16,
      letterSpacing: "-0.03em",
    },
    h4: {
      fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
      fontWeight: 700,
      lineHeight: 1.34,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.45,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.6,
      color: "#475569",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 700,
      lineHeight: 1.5,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.9375rem",
      lineHeight: 1.65,
    },
    button: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
      textTransform: "none",
    },
  },
  shadows: [
    ...baseTheme.shadows.slice(0, 8),
    "0 18px 44px rgba(15, 23, 42, 0.08)",
    "0 22px 54px rgba(15, 23, 42, 0.10)",
    "0 26px 64px rgba(15, 23, 42, 0.12)",
    ...baseTheme.shadows.slice(11),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at top left, rgba(248, 113, 113, 0.12), transparent 20%), radial-gradient(circle at top right, rgba(59, 130, 246, 0.08), transparent 18%), #f4f7fb",
        },
        "*::selection": {
          backgroundColor: alpha("#dc2626", 0.18),
          color: "#0f172a",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          backgroundImage: "none",
          border: `1px solid ${alpha("#0f172a", 0.06)}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          border: `1px solid ${alpha("#0f172a", 0.06)}`,
          boxShadow: "0 18px 44px rgba(15, 23, 42, 0.08)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "10px 18px",
          minHeight: 44,
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          boxShadow: "0 16px 34px rgba(15, 23, 42, 0.18)",
          "&:hover": {
            background: "linear-gradient(135deg, #111827 0%, #334155 100%)",
            boxShadow: "0 18px 38px rgba(15, 23, 42, 0.22)",
          },
        },
        outlinedPrimary: {
          borderColor: alpha("#0f172a", 0.16),
          backgroundColor: alpha("#ffffff", 0.72),
          "&:hover": {
            borderColor: alpha("#0f172a", 0.24),
            backgroundColor: alpha("#ffffff", 0.9),
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
          border: `1px solid ${alpha("#0f172a", 0.08)}`,
          backgroundColor: alpha("#ffffff", 0.92),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          backgroundColor: alpha("#ffffff", 0.88),
          transition: "box-shadow 160ms ease, border-color 160ms ease",
          "& fieldset": {
            borderColor: alpha("#0f172a", 0.12),
          },
          "&:hover fieldset": {
            borderColor: alpha("#0f172a", 0.24),
          },
          "&.Mui-focused": {
            boxShadow: `0 0 0 4px ${alpha("#2563eb", 0.10)}`,
          },
        },
        input: {
          paddingTop: 14,
          paddingBottom: 14,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#64748b",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          fontWeight: 700,
          color: "#334155",
          "&.Mui-selected": {
            backgroundColor: "#0f172a",
            color: "#ffffff",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha("#ffffff", 0.96),
          backdropFilter: "blur(18px)",
          borderRight: `1px solid ${alpha("#0f172a", 0.08)}`,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          "&.Mui-focusVisible": {
            backgroundColor: alpha("#2563eb", 0.08),
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: 700,
          borderRadius: 999,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 28,
          boxShadow: "0 28px 64px rgba(15, 23, 42, 0.14)",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: 999,
          backgroundColor: "#0f172a",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 48,
          fontWeight: 700,
          color: "#64748b",
          "&.Mui-selected": {
            color: "#0f172a",
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          transform: "none",
          borderRadius: 18,
        },
      },
    },
  },
});

export default theme;
