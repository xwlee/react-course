import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useFavourites } from "../../store/favourites-context";

const MeetupItem = ({ id, image, title, address, description }) => {
  const favouritesCtx = useFavourites();

  const itemIsFavourite = favouritesCtx.itemIsFavourite(id);

  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(id);
    } else {
      favouritesCtx.addFavourite({
        id,
        image,
        title,
        address,
        description,
      });
    }
  };

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from favourites" : "To Favourites"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
