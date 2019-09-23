const url = "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"


const getData = () => {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return (
                data.results
            )
        })
}


export default getData;