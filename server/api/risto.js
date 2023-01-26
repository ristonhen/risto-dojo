
export default defineEventHandler( async (event) => {
    // // handle query params
    // const { name } = getQuery(event)

    // // handle post data
    // const { age } = await readBody(event)
    // // return { 
    // //     message: `hello, ${name}! your age is ${age}`
    // //  }

    
    //api call with private key
    const uri = 'https://api.currencyapi.com/v3/latest?apikey=1rBe3H6fodhsvFxA1BIo1mllw4cjaWz4gCYW8vYS'
    const { data } =  await $fetch(uri)
    
    return data
  })