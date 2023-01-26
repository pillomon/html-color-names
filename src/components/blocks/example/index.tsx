interface ExampleProps {
  hex?: string;
  negativeHex?: string;
  name?: string;
}

export default function Example({ hex, negativeHex, name }: ExampleProps) {
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
        <div className="group transition-all">
          <h2>What is Lorem Ipsum?</h2>
          <p>
            <strong className="inline-block group-hover:scale-150 transition-all">
              Lorem Ipsum
            </strong>
            &nbsp;is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <button
            className="rounded w-20 h-10 active:scale-90 transition-all"
            style={{ color: negativeHex, backgroundColor: hex }}
          >
            button
          </button>
        </div>
      </div>
    </div>
  );
}
