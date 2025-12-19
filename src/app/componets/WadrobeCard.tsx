import { WardrobeItem } from "../types/wadrobe";

type Props = {
  item: WardrobeItem;
};

const WardrobeCard = ({ item }: Props) => {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.color}</p>
    </div>
  );
};

export default WardrobeCard;
