
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            lists: [],
            searing: "",
            filtered: [],
        }
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(json => {
            this.setState(
                () => {
                    return { lists: json.results, filtered: json.results };
                },
                () => {
                    console.log( this.state )
                }
            );

            console.log(" json:\t ", json.results, typeof json.results)
            
        })
    }

    onChangeHandler = event => {

        const compraed = this.state.lists.filter( item => {
            return item.name.includes(event.target.value);
        })

        this.setState(
            () => {
                // return { searing: event.target.value}
                return { filtered: compraed }
            },
            () => {
                
                console.log(this.state.searing)
            }
        )
    }

    render() {
        return (
            <div>
                <h2>React2</h2>
                {/* <input type="search" onChange={ item => { ... }} /> */}
                {/* <input type="search" onChange={this.onChangeHandler} /> */}
                {/* <ul> */}
                    {/* {
                        this.state.filtered.map( (item, idx) => <li key={idx}>{ item.name }</li>)
                    } */}
                    {/* <Lists lists={this.state.filtered} /> */}
                {/* </ul> */}
                
                <Input onChangeHandler={this.onChangeHandler}/>
                <Lists lists={this.state.filtered}/>

            </div>
        );
            
    }
}