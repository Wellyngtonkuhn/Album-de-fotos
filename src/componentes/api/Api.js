const API_KEY ='563492ad6f91700001000001d36b6a2355ab46c1a8579877e9d7e8a7'
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
                    slug: 'natureza',
                    title:'Natureza',
                    items: await basicFetch(`search?query=natureza`)
                },

                {
                    slug: 'oceano',
                    title: 'Oceano',
                    items: await basicFetch(`search?query=oceano`)
                },
                {
                    slug: 'europa',
                    title: 'Europa',
                    items: await basicFetch(`search?query=europa`)
                }
            ]
        }
    }

