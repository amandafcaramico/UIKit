import { Tabs, Tab } from "@mui/material";

interface TabOption {
  label: string;
  value: string;
}

interface TabSelectorProps {
  value: string;
  onChange: (value: string) => void;
  options: TabOption[];
  className?: string;
}

const tabStyle = {
  fontSize: "0.75rem",
  "@media (min-width: 640px)": {
    fontSize: "1rem",
  },
  fontWeight: 400,
  textTransform: "none" as const,
  fontFamily: "'Poppins', sans-serif",
};

const selectedTabStyle = {
  ...tabStyle,
  color: "#000000",
};

const TabSelector = ({
  value,
  onChange,
  options,
  className = "",
}: TabSelectorProps) => {
  return (
    <Tabs
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      indicatorColor="primary"
      variant="scrollable"
      scrollButtons={false}
      className={`w-full ${className}`}
    >
      {options.map((option) => (
        <Tab
          key={option.value}
          label={option.label}
          value={option.value}
          sx={value === option.value ? selectedTabStyle : tabStyle}
        />
      ))}
    </Tabs>
  );
};

export default TabSelector;
