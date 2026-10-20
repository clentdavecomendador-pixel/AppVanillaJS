const api = "https://dog.ceo/api/breeds/image/random"
 
export const fetchData = async () => {
   const response = await fetch(api)
   const data = await response.json()
   console.log(data)
   return data;
}