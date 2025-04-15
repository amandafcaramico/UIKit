export const iconStyle = (bg: string) => ({
  fill: "white",
  borderRadius: "0.5rem",
  paddingX: 0.5,
  cursor: "pointer",
  fontSize: 30,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1) translateY(-0.25rem)",
    backgroundColor: bg,
  },
});

export const modalStyle = (isSmallScreen: boolean) => ({
  position: "absolute" as "absolute",
  borderRadius: "1rem",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: isSmallScreen ? "80%" : "35%",
  maxHeight: "65%",
  bgcolor: "white",
  overflowY: "auto",
  padding: "2rem",
  ":focus": {
    border: "none",
  },
});
