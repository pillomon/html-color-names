import { create } from 'zustand';
import { ColorType } from '@/constants/color';

interface StoreType {
  tempKeyword: string;
  setTempKeyword: (newTempKeyword: string) => void;
  searchResult: ColorType[];
  setSearchResult: (newSearchResult: ColorType[]) => void;
  focusItem: number | null;
  setFocusItem: (newFocusItem: number | null) => void;
  searchListView: boolean;
  setSearchListView: (newSearchListView: boolean) => void;
}

const useStore = create<StoreType>((set) => ({
  tempKeyword: '',
  setTempKeyword: (newTempKeyword) => {
    set({ tempKeyword: newTempKeyword });
  },
  searchResult: [],
  setSearchResult: (newSearchResult) => {
    set({ searchResult: [...newSearchResult] });
  },
  focusItem: null,
  setFocusItem: (newFocusItem) => {
    set({ focusItem: newFocusItem });
  },
  searchListView: false,
  setSearchListView: (newSearchListView) => {
    set({ searchListView: newSearchListView });
  },
}));

export default useStore;
