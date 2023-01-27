import useStore from '@/store/useStore';

export default function Title() {
  const setFocusItem = useStore((state) => state.setFocusItem);
  const setSearchListView = useStore((state) => state.setSearchListView);

  return (
    <h1
      className="m-0 bg-text-pattern bg-clip-text text-transparent bg-5/1 animate-text mb-10"
      onClick={() => {
        setFocusItem(null);
        setSearchListView(false);
      }}
    >
      <span className="font-magilio text-6xl whitespace-nowrap">
        HTML COLOR NAMES
      </span>
    </h1>
  );
}
