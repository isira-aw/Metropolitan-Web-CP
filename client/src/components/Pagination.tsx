import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: number[] = [];
  const maxPagesToShow = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-black/[0.06] text-[#424242] hover:bg-[#f8f8f8] disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {startPage > 1 && (
        <>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(1)}
            className="rounded-lg border border-black/[0.06] text-[#424242] hover:bg-[#f8f8f8]"
          >
            1
          </Button>
          {startPage > 2 && <span className="px-2 text-[#424242]">...</span>}
        </>
      )}

      {pages.map((page) => (
        <Button
          key={page}
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page)}
          className={
            page === currentPage
              ? "rounded-lg bg-[#144A92] text-white border-[#144A92] hover:bg-[#144A92]/90 hover:text-white"
              : "rounded-lg border border-black/[0.06] text-[#424242] hover:bg-[#f8f8f8]"
          }
        >
          {page}
        </Button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2 text-[#424242]">...</span>}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(totalPages)}
            className="rounded-lg border border-black/[0.06] text-[#424242] hover:bg-[#f8f8f8]"
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-black/[0.06] text-[#424242] hover:bg-[#f8f8f8] disabled:opacity-40"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
