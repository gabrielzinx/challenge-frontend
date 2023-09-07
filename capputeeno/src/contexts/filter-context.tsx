'use client'

import { createContext, ReactNode, useState } from "react";
import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.all,
    priority: PriorityTypes.news,
    setPriority: (value: PriorityTypes) => { },
    setSearch: (value: string) => { },
    setPage: (value: number) => { },
    setType: (value: FilterType) => { },
});

interface FilterProviderProps {
    children: ReactNode
}

export default function FilterContextProvider({ children }: FilterProviderProps) {

    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.all);
    const [priority, setPriority] = useState(PriorityTypes["best-sellers"]);

    return (
        <FilterContext.Provider
            value={{
                search,
                setSearch,
                page,
                setPage,
                type,
                setType,
                priority,
                setPriority
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}