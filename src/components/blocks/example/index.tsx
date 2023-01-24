interface ExampleProps {
  hex: string;
  negativeHex: string;
  name: string;
}

export default function Example({ hex, negativeHex, name }: ExampleProps) {
  return (
    <div
      className="w-full h-full"
      style={{ color: hex, backgroundColor: negativeHex }}
    >
      <div className="flex flex-col items-start absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto">
        <div>
          <h2>Color: {name === '' ? hex : name}</h2>
        </div>
        <div className="rounded hover:scale-105 transition-all">
          <h2>What is Lorem Ipsum?</h2>
          <p>
            <strong>Lorem Ipsum</strong> is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry&apos;s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
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
