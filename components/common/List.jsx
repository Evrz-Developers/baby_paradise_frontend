import ListItem from "./ListItem";

const List = ({
  items,
  handleListItemClick,
  clickable = true,
  showImage = false,
  title = false,
  className,
}) => {
  return (
    <>
      <h2 className={`title flex justify-center text-heading-4 ${className}`}>
        {title || items[0]?.category?.name}
      </h2>
      <div className="overflow-y-auto">
        {items.map((item) => (
          <ListItem
            key={item.id}
            name={item.name}
            image={item.product_image}
            showImage={showImage}
            onClick={clickable ? () => handleListItemClick(item.id) : undefined}
          />
        ))}
      </div>
    </>
  );
};

export default List;
