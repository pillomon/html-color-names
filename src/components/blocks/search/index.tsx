import Link from 'next/link';
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
  const focusItem = useStore((state) => state.focusItem);
  const setFocusItem = useStore((state) => state.setFocusItem);
  const searchListView = useStore((state) => state.searchListView);
  const setSearchListView = useStore((state) => state.setSearchListView);
  const tempKeyword = useStore((state) => state.tempKeyword);
  const setTempKeyword = useStore((state) => state.setTempKeyword);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [closeIconView, setCloseIconView] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const closeIconRef = useRef<HTMLButtonElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  const changeInputState = (value: string) => {
    value === '' ? setSearchListView(false) : setSearchListView(true);
    setTempKeyword(value);
    setSearchKeyword(value);
    setFocusItem(null);
    if (value.length > 0) {
      setCloseIconView(true);

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
            const tempColor = COLORS.find(
              (_element) =>
                _element.hex.toLowerCase() === tempValue.toLowerCase(),
            );

            setSearchResult([
              {
                name: tempColor !== undefined ? tempColor.name : '',
                hex: tempValue,
              },
            ]);
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
            const tempColor_1 = COLORS.find(
              (_element) =>
                _element.hex.toLowerCase() === tempValue.toLowerCase(),
            );
            const tempColor_2 = COLORS.find(
              (_element) =>
                _element.hex.toLowerCase() ===
                (tempValue.slice(0, -1) + '1').toLowerCase(),
            );
            const tempColor_3 = COLORS.find(
              (_element) =>
                _element.hex.toLowerCase() ===
                (tempValue.slice(0, -1) + '2').toLowerCase(),
            );
            const tempColor_4 = COLORS.find(
              (_element) =>
                _element.hex.toLowerCase() ===
                (tempValue.slice(0, -1) + '3').toLowerCase(),
            );
            setSearchResult([
              {
                name: tempColor_1 !== undefined ? tempColor_1.name : '',
                hex: tempValue,
              },
              {
                name: tempColor_2 !== undefined ? tempColor_2.name : '',
                hex: tempValue.slice(0, -1) + '1',
              },
              {
                name: tempColor_3 !== undefined ? tempColor_3.name : '',
                hex: tempValue.slice(0, -1) + '2',
              },
              {
                name: tempColor_4 !== undefined ? tempColor_4.name : '',
                hex: tempValue.slice(0, -1) + '3',
              },
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
      setCloseIconView(false);
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

    setSearchListView(false);

    const foundColor = COLORS.find(
      (_element) => _element.name === searchKeyword,
    );

    if (foundColor === undefined) {
      router.push({
        pathname: '/list',
      });
    } else {
      setSearchResult([foundColor]);
      router.push({
        pathname: `/color/${encodeURIComponent(foundColor.hex.slice(1))}`,
        query: { name: foundColor.name || '' },
      });
    }
  };

  const onHandleArrowUp = (event: KeyboardEvent) => {
    if (event.code !== 'ArrowUp') return false;

    event.preventDefault();

    if (searchKeyword.length === 0) return false;

    if (searchResult.length === 0) return false;

    if (focusItem === null) return false;

    if (focusItem === 0) {
      setFocusItem(null);
      setSearchKeyword(tempKeyword);
      setSearchListView(false);
    } else {
      setFocusItem(focusItem - 1);
      searchResult[focusItem - 1].name === ''
        ? setSearchKeyword(searchResult[focusItem - 1].hex)
        : setSearchKeyword(searchResult[focusItem - 1].name);
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

    if (focusItem === null && searchListView === false) {
      setSearchListView(true);
      return false;
    }

    const listLength = ulRef.current?.childElementCount;

    if (listLength === undefined) return false;

    if (focusItem === null) {
      setFocusItem(0);
      searchResult[0].name === ''
        ? setSearchKeyword(searchResult[0].hex)
        : setSearchKeyword(searchResult[0].name);
      return false;
    }

    if (listLength - 2 <= focusItem) {
      setFocusItem(0);
      searchResult[0].name === ''
        ? setSearchKeyword(searchResult[0].hex)
        : setSearchKeyword(searchResult[0].name);
    } else {
      setFocusItem(focusItem + 1);
      searchResult[focusItem + 1].name === ''
        ? setSearchKeyword(searchResult[focusItem + 1].hex)
        : setSearchKeyword(searchResult[focusItem + 1].name);
    }
  };

  return (
    <form className="relative mb-20">
      <div className="inline-block w-auto h-auto relative">
        <input
          className="w-96 pt-4 pl-4 pr-10 pb-4 rounded-md bg-[#10172a] text-[#fffeee] text-base outline-none"
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
          placeholder="Ex) White or # + Hex"
        />
        {closeIconView ? (
          <button
            className="inline-block w-auto h-auto absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
            ref={closeIconRef}
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
        {searchListView ? (
          <div className="bg-[#10172a] absolute left-0 bottom-1 translate-y-full inline-block w-auto h-auto max-h-40 z-20 rounded-b-md">
            <ul ref={ulRef}>
              {searchResult.map((_element, _idx) => {
                if (_idx < 4) {
                  if (focusItem === _idx) {
                    return (
                      <SearchList
                        key={_idx}
                        idx={_idx}
                        element={_element}
                        selected={true}
                      />
                    );
                  } else {
                    return (
                      <SearchList
                        key={_idx}
                        idx={_idx}
                        element={_element}
                        selected={false}
                      />
                    );
                  }
                }
              })}
              {searchResult.length > 4 && searchKeyword.split('')[0] !== '#' ? (
                <li className="w-96 h-auto bg-[#10172a] text-end py-1 pr-4 rounded-b-md">
                  <Link
                    className="cursor-pointer hover:underline text-[#fffeee] text-sm"
                    href="/list"
                    rel="noreferrer noopener"
                  >
                    View More({searchResult.length})
                  </Link>
                </li>
              ) : (
                <></>
              )}
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
