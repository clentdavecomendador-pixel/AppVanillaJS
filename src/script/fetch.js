const api = "https://dog.ceo/api/breeds/image/random"

export const fetchData = async () => {
   try {
      const response = await fetch(api)
      if (!response.ok) {
         throw new Error(`Dog API request failed: ${response.status}`)
      }
      const data = await response.json()
      console.log(data)
      return data;
   } catch (error) {
      console.error("Could not load a dog image:", error)
      return null
   }
}