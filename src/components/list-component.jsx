class Lists extends React.Component {
    render() {
        console.log("List co...", this.props)
        const { lists } = this.props;
        console.log("lists:\t", lists)
        return (
            <ul>
            {
                lists.map( (item, idx) => {

                    return (
                        <div key={ item.url }>
                            <li key={idx}>{ item.name }</li>
                            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{ index + 1}.png` }></img>
                        </div>
                    )

                    
                })
            }
            </ul>
        );
    }
}