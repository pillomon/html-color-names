import useStore from '@/store/useStore';

export default function SubTitle() {
  const setFocusItem = useStore((state) => state.setFocusItem);
  const setSearchListView = useStore((state) => state.setSearchListView);

  return (
    <h2
      className="text-black mb-10 text-center"
      onClick={() => {
        setFocusItem(null);
        setSearchListView(false);
      }}
    >
      <span className="font-magilio text-4xl whitespace-nowrap">
        You can search by browser color with name
        <br />
        or hexadecimal color value.
      </span>
    </h2>
  );
}
