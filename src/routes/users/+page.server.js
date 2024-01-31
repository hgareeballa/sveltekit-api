export const load = async ({url}) =>{    
    const limit = Number(url.searchParams.get('limit')) || 10
    const skip = Number(url.searchParams.get('skip')) ||0
    return {
        users: await loadUsers(limit,skip)
    }
}//



const loadUsers = async (limit = 10,skip = 0) =>{
    const res = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
    const data = await res.json()
    return data
}