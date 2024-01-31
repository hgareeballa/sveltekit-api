
export const load = async () =>{   
    return {
        quotes: fetchQuotes()
    }
}//

const fetchQuotes = async () =>{
    const res = await fetch('https://dummyjson.com/quotes?limit=500')
    const data = await res.json()       
    return data.quotes
}//