import { useEffect, useRef, useState } from 'react';
import { GrSearch, GrClose } from 'react-icons/gr';
import { COLORS, ColorType } from '@/constants/color';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState<ColorType[]>([]);
  const [view, setView] = useState({ closeIcon: false });

  const inputRef = useRef<HTMLInputElement>(null);

  const changeInputState = (value: string) => {
    setSearchText(value);
    if (value.length > 0) {
      setView((prev) => {
        return { ...prev, closeIcon: true };
      });

      const searchResult = COLORS.filter(
        (element: ColorType) =>
          element.name.toLowerCase().includes(value.toLocaleLowerCase()) ===
          true,
      );

      if (searchResult.length !== 0) setSearchResult(searchResult);
      else setSearchResult([]);
    } else {
      setView((prev) => {
        return { ...prev, closeIcon: false };
      });
      setSearchResult([]);
    }
  };

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  return (
    <form className="relative">
      <div className="inline-block w-auto h-auto relative">
        <input
          type="text"
          value={searchText}
          ref={inputRef}
          onChange={(e) => {
            changeInputState(e.target.value);
          }}
          placeholder="Enter color name or color hex"
          className="w-96 pt-4 pl-4 pr-10 pb-4 rounded-md"
        />
        {view.closeIcon ? (
          <GrClose
            className="absolute top-1/2 right-4 -translate-y-1/2 w-4 h-4 cursor-pointer"
            onClick={() => {
              changeInputState('');
            }}
          />
        ) : (
          <></>
        )}
        <div className="absolute left-0 bottom-0 translate-y-full inline-block w-auto h-auto z-10">
          <ul>
            {searchResult.length !== 0 ? (
              <>
                {searchResult.map((element, idx) => {
                  if (idx < 4) {
                    return (
                      <li
                        key={idx}
                        className="flex items-center w-96 h-auto whitespace-nowrap"
                      >
                        <GrSearch className="w-3 h-3" />
                        <span>{element.name}</span>
                        <div
                          className="rounded-9999 w-4 h-4"
                          style={{ backgroundColor: element.hex }}
                        />
                      </li>
                    );
                  }
                })}
                <li className="w-96 h-auto text-end items-center justify-end">
                  <a>View More</a>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </form>
  );
}
