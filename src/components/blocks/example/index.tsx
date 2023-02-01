import { useState } from 'react';

export interface ExampleProps {
  hex: string;
  negativeHex: string;
  name: string;
}

export default function Example({ hex, negativeHex, name }: ExampleProps) {
  const [isHover, setIsHvoer] = useState(false);
  return (
    <div
      className="w-full h-full"
      style={{ color: hex, backgroundColor: negativeHex }}
    >
      <div className="flex flex-col items-start gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto">
        <div>
          <span>Name: {name === '' ? '-' : name}</span>
        </div>
        <div>
          <span>Hex: {hex?.toLowerCase()}</span>
        </div>
        <div>
          <br />
          <hr />
          <br />
          <h2>What is Lorem Ipsum?</h2>
          <p
            className="group text-base"
            onMouseEnter={() => setIsHvoer(!isHover)}
            onMouseLeave={() => setIsHvoer(!isHover)}
          >
            <strong className="inline-block w-auto h-auto group-hover:text-8xl transition-all">
              Lorem Ipsum
            </strong>
            <span className={`${isHover ? 'invisible' : 'visible'}`}>
              &nbsp;is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </span>
          </p>
          <br />
          <hr />
          <br />
        </div>
        <div>
          <button
            className="rounded active:scale-110 w-20 h-10 transition-all"
            style={{ color: negativeHex, backgroundColor: hex }}
          >
            button
          </button>
        </div>
      </div>
    </div>
  );
}
