import { create } from "zustand";

const useCategoryStore = create((set) => ({
    categories: typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("categories")) || []
        : [],
    setCategories: (categories) => {
        set({ categories });
        if (typeof window !== "undefined") {
            localStorage.setItem("categories", JSON.stringify(categories));
        }
    },
    isLoading: true,
    setLoading: (isLoading) => set({ isLoading }),
}));

export default useCategoryStore;
