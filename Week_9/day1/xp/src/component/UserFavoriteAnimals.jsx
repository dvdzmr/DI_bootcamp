

function UserFavoriteAnimals(props) {
    const favorites = props.favorites;
    return (
        favorites.map(favorite => <li>{favorite}</li>)
    );
}

export default UserFavoriteAnimals;