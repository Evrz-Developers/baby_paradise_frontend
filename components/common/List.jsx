import ListItem from "./ListItem";

const List = ({
  items,
  handleListItemClick,
  clickable = true,
  showImage = false,
}) => {
  return (
    <>
      {items.map((item) => (
        <ListItem
          key={item.id}
          name={item.name}
          image={item.product_image}
          showImage={showImage}
          onClick={clickable ? () => handleListItemClick(item.id) : undefined}
        />
      ))}
    </>
  );
};

export default List;
