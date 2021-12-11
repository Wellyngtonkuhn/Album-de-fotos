const API_KEY ='563492ad6f9170000100000153777882b0ff4d05b1a7609fdcfeb3f9'
const API_BASE = 'https://api.pexels.com/v1/'




    const basicFetch =  async (endpoint) =>{
        const req = await fetch(`${API_BASE}${endpoint}`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization: API_KEY
            },
        })
        const json = await req.json()
        return json
    }

export default{
        getHomeList: async () =>{
            return[
                {
                    slug: 'wedding',
                    title:'Casamento',
                    items: await basicFetch(`search?query=wedding&per_page=30`)
                }
            ]
        }
    }

    