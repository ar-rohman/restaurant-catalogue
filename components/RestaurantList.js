import PropTypes from "prop-types";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ restaurants }) {
  return (
    <div className="grid">
      {restaurants?.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
    </div>
  )
}

RestaurantItem.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
};
