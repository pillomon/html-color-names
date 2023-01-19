import { useEffect, useRef, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
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

      if (value.split('')[0] === '#') {
        const hexRegExp = /[0-9a-f]/i;
        const valueSplitArr = value.split('');
        let isHex = false;

        if (value.length === 7) {
          console.log(true);
          for (let idx = 1; idx < value.length; idx++) {
            if (hexRegExp.test(valueSplitArr[idx])) isHex = true;
            else {
              isHex = false;
              break;
            }
          }
          if (isHex) {
            const tempValue = value.padEnd(7, '0');
            setSearchResult([{ name: '', hex: tempValue }]);
          } else setSearchResult([]);
        } else if (value.length < 8 && value.length > 1) {
          for (let idx = 1; idx < value.length; idx++) {
            if (hexRegExp.test(valueSplitArr[idx])) isHex = true;
            else {
              isHex = false;
              break;
            }
          }
          if (isHex) {
            const tempValue = value.padEnd(7, '0');
            setSearchResult([
              { name: '', hex: tempValue },
              { name: '', hex: tempValue.slice(0, -1) + '1' },
              { name: '', hex: tempValue.slice(0, -1) + '2' },
              { name: '', hex: tempValue.slice(0, -1) + '3' },
            ]);
          } else {
            setSearchResult([]);
          }
        } else setSearchResult([]);
      } else {
        const newSearchResult = COLORS.filter(
          (element: ColorType) =>
            element.name.toLowerCase().includes(value.toLocaleLowerCase()) ===
            true,
        );

        if (newSearchResult.length !== 0) setSearchResult(newSearchResult);
        else setSearchResult([]);
      }
    } else {
      setView((prev) => {
        return { ...prev, closeIcon: false };
      });
      setSearchResult([]);
    }
  };

  return (
    <form className="relative mb-10">
      <div className="inline-block w-auto h-auto relative">
        <input
          type="text"
          value={searchText}
          ref={inputRef}
          onChange={(e) => {
            changeInputState(e.target.value);
          }}
          placeholder="Ex) White or #FFFFFF"
          className="w-96 pt-4 pl-4 pr-10 pb-4 rounded-md bg-[#10172a] text-[#fffeee] text-base outline-none"
        />
        {view.closeIcon ? (
          <span className="inline-block w-auto h-auto absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
            <CloseIcon
              className="text-[#fffeee]"
              onClick={() => {
                changeInputState('');
              }}
            />
          </span>
        ) : (
          <></>
        )}
        <div className="bg-[#10172a] absolute left-0 bottom-1 translate-y-full inline-block w-auto h-auto z-10 rounded-b-md">
          <ul>
            {searchResult.length !== 0 ? (
              <>
                {searchResult.map((_element, _idx) => {
                  if (_idx < 4) {
                    return (
                      <li
                        key={_idx}
                        className="flex items-center justify-between w-96 h-auto cursor-pointer py-2 bg-[#10172a] hover:bg-[#101F4a] last:rounded-b-md"
                      >
                        <span className="flex items-center gap-2 pl-4">
                          <span className="flex items-center w-auto h-auto">
                            <SearchIcon
                              fontSize="small"
                              className="blcok text-[#fffeee]"
                            />
                          </span>
                          <span className="inline-block text-[#fffeee] text-base">
                            {_element.name}
                          </span>
                          <span
                            className={`inline-block text-[#fffeee] ${
                              _element.name === '' ? 'text-base' : 'text-xs'
                            }`}
                          >
                            {_element.hex.toUpperCase()}
                          </span>
                        </span>
                        <div
                          className="rounded w-3 h-3 mr-4"
                          style={{ backgroundColor: _element.hex }}
                        />
                      </li>
                    );
                  }
                })}
                {searchResult.length > 4 && searchText.split('')[0] !== '#' ? (
                  <li className="w-96 h-auto text-end py-1 pr-4">
                    <a
                      href="#"
                      rel="noreferrer noopener"
                      className="cursor-pointer hover:underline text-[#fffeee] text-sm"
                    >
                      View More
                    </a>
                  </li>
                ) : (
                  <></>
                )}
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
