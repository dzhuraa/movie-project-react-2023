const MoviesListCard = ({movie}) => {
    const {id, title} = movie;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {MoviesListCard};