import { useRouter } from 'next/router';
import { useRef, useState, KeyboardEvent } from 'react';
import useStore from '@/store/useStore';
import SearchList from '@/components/atoms/searchlist';
import CloseIcon from '@material-ui/icons/Close';
import { COLORS, ColorType } from '@/constants/color';

export default function Search() {
  const router = useRouter();

  const searchResult = useStore((state) => state.searchResult);
  const setSearchResult = useStore((state) => state.setSearchResult);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [view, setView] = useState({ closeIcon: false, searchList: false });
  const [focusItem, setFocusItem] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const closeIconRef = useRef<HTMLButtonElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  const changeInputState = (value: string) => {
    setSearchKeyword(value);
    setView((prev) => {
      return { closeIcon: prev.closeIcon, searchList: true };
    });
    setFocusItem(null);
    if (value.length > 0) {
      setView((prev) => {
        return { ...prev, closeIcon: true };
      });

      if (value.split('')[0] === '#') {
        const hexRegExp = /[0-9a-f]/i;
        const valueSplitArr = value.split('');
        let isHex = false;

        if (value.length === 7) {
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

  const keyEvent = (
    eventType: string,
    event: KeyboardEvent,
    callback: (event: KeyboardEvent) => void,
  ): void => {
    switch (eventType) {
      case 'ArrowUp': {
        callback(event);
        break;
      }
      case 'ArrowDown': {
        callback(event);
        break;
      }
      case 'Enter': {
        callback(event);
        break;
      }
      default:
        break;
    }
  };

  const onHandleEnter = (event: KeyboardEvent) => {
    if (event.code !== 'Enter') return false;

    event.preventDefault();

    if (searchKeyword.length === 0) return false;

    if (searchResult.length === 0) return false;

    const foundColor = COLORS.find(
      (_element) => _element.name === searchKeyword,
    );

    if (foundColor === undefined) {
      if (searchResult.length > 0) {
        router.push({
          pathname: '/list',
        });
      } else {
        return false;
      }
    } else {
      setSearchResult([foundColor]);
      router.push({
        pathname: '/list',
      });
    }
  };

  const onHandleArrowUp = (event: KeyboardEvent) => {
    if (event.code !== 'ArrowUp') return false;

    event.preventDefault();

    if (searchKeyword.length === 0) return false;

    if (searchResult.length === 0) return false;

    if (focusItem === null) {
      setView((prev) => {
        return { closeIcon: prev.closeIcon, searchList: false };
      });
      return false;
    }

    if (focusItem === 0) {
      setFocusItem(null);
    } else {
      setFocusItem(focusItem - 1);
      setSearchKeyword(searchResult[focusItem - 1].name);
    }

    inputRef.current?.setSelectionRange(
      searchKeyword.length,
      searchKeyword.length,
    );
  };

  const onHandleArrowBottom = (event: KeyboardEvent) => {
    if (event.code !== 'ArrowDown') return false;

    if (searchKeyword.length === 0) return false;

    if (searchResult.length === 0) return false;

    if (focusItem === null && view.searchList === false) {
      setView((prev) => {
        return { closeIcon: prev.closeIcon, searchList: true };
      });
      return false;
    }

    const listLength = ulRef.current?.childElementCount;

    if (listLength === undefined) return false;

    if (focusItem === null) {
      setFocusItem(0);
      setSearchKeyword(searchResult[0].name);
      return false;
    }

    if (listLength - 1 <= focusItem) {
      setFocusItem(0);
      setSearchKeyword(searchResult[0].name);
    } else {
      setFocusItem(focusItem + 1);
      setSearchKeyword(searchResult[focusItem + 1].name);
    }
  };

  return (
    <form className="relative mb-10">
      <div className="inline-block w-auto h-auto relative">
        <input
          type="text"
          value={searchKeyword}
          ref={inputRef}
          onChange={(e) => {
            changeInputState(e.target.value);
          }}
          onMouseEnter={() => {
            inputRef.current?.focus();
          }}
          onMouseLeave={() => {
            if (searchKeyword.length === 0) inputRef.current?.blur();
          }}
          onKeyDown={(e) => {
            keyEvent('Enter', e, onHandleEnter);
            keyEvent('ArrowUp', e, onHandleArrowUp);
            keyEvent('ArrowDown', e, onHandleArrowBottom);
          }}
          placeholder="Ex) White or #FFFFFF"
          className="w-96 pt-4 pl-4 pr-10 pb-4 rounded-md bg-[#10172a] text-[#fffeee] text-base outline-none"
        />
        {view.closeIcon ? (
          <button
            ref={closeIconRef}
            className="inline-block w-auto h-auto absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
          >
            <CloseIcon
              className="text-[#fffeee]"
              onClick={() => {
                changeInputState('');
              }}
            />
          </button>
        ) : (
          <></>
        )}
        {view.searchList && searchResult.length > 0 ? (
          <div className="bg-[#10172a] absolute left-0 bottom-1 translate-y-full inline-block w-auto h-auto z-10 rounded-b-md">
            <ul ref={ulRef}>
              {searchResult.map((_element, _idx) => {
                if (_idx < 4) {
                  if (focusItem === _idx) {
                    return (
                      <SearchList
                        key={_idx}
                        element={_element}
                        selected={true}
                      />
                    );
                  } else {
                    return (
                      <SearchList
                        key={_idx}
                        element={_element}
                        selected={false}
                      />
                    );
                  }
                }
              })}
              {searchKeyword.length > 0 && searchResult.length === 0 ? (
                <li className="w-96 h-auto bg-[#10172a] py-2 flex items-center rounded-b-md">
                  <span className="inline-block pl-4 text-[#fffeee]">
                    No color found
                  </span>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </form>
  );
}
