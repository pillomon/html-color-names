import { create } from 'zustand';
import { ColorType } from '@/constants/color';

interface StoreType {
  searchResult: ColorType[];
  setSearchResult: (newSearchResult: ColorType[]) => void;
}

const useStore = create<StoreType>((set) => ({
  searchResult: [],
  setSearchResult: (newSearchResult) => {
    set({ searchResult: [...newSearchResult] });
  },
}));

export default useStore;
