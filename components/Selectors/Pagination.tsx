import React from "react";
import { motion } from "framer-motion";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  lessRounded?: boolean;
  className?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  lessRounded = false,
  className = "",
}: PaginationProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        const isActive = currentPage === page;

        return (
          <motion.button
            whileHover={{ scale: 1.025, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            key={page}
            animate={{ backgroundColor: isActive ? "#4F46E5" : "#ffffff" }}
            onClick={() => onPageChange(page)}
            className={`p-2 w-8 h-8 text-sm w-full h-full flex items-center justify-center transition-colors duration-300
                border-[1.5px] border-primary shadow-md hover:shadow-lg ${
                  isActive ? "text-white" : "text-black"
                } ${lessRounded ? "rounded-md" : "rounded-3xl"}`}
          >
            {page}
          </motion.button>
        );
      })}
    </div>
  );
};

export default Pagination;
