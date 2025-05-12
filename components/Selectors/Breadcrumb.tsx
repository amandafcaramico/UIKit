import Link from "next/link";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="text-sm" aria-label="breadcrumb">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <>
                  <Link
                    href={item.href || "#"}
                    className="text-gray-400 hover:text-primary transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                  <ChevronRightRoundedIcon
                    sx={{
                      fontSize: "20px",
                      marginLeft: "0.25rem",
                      fill: "#9ca3af",
                    }}
                  />
                </>
              ) : (
                <span className="text-primary font-medium cursor-default">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
