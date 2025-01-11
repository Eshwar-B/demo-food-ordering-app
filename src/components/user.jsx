const UserFunctionalComponent = ({ name, location, type }) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Component Type: {type}</h3>
        </div>
    );
};

export default UserFunctionalComponent;