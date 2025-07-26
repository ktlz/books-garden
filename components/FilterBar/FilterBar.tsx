"use client";

import { useBooksStore } from "@/store/useBooksStore";

const FilterBar = () => {
  const status = useBooksStore((s) => s.filters.status);
  const minRating = useBooksStore((s) => s.filters.minRating);
  const setFilters = useBooksStore((s) => s.setFilters);

  const sharedClasses =
    "w-full py-3 pl-10 pr-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mb-6">
      <div className="relative">
        <select
          value={status}
          onChange={(e) => setFilters({ status: e.target.value as any })}
          className={sharedClasses}
        >
          <option value="all">All statuses</option>
          <option value="to-read">To Read</option>
          <option value="reading">Reading</option>
          <option value="read">Read</option>
        </select>
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
          📚
        </div>
      </div>

      <div className="relative">
        <select
          value={minRating}
          onChange={(e) => setFilters({ minRating: Number(e.target.value) })}
          className={sharedClasses}
        >
          {[0, 1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r}+
            </option>
          ))}
        </select>
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
          ⭐
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
