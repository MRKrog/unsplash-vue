export const fetchData = async () => {
  const url = "https://api.unsplash.com/search/photos?client_id=121bf3fe8b7b77acd71a149ee60f73e20197e36eddab74db7374d2eb0cbd3a57&page=1&query=space"
  try {
    const response = await fetch(url)
    const data = await response.json()
    const images = await fetchImages(data.results)
    return images
  } catch (error) {
    console.log(error);
  }
}

export const fetchPhotos = async (search) => {
  const url = `https://api.unsplash.com/search/photos?client_id=121bf3fe8b7b77acd71a149ee60f73e20197e36eddab74db7374d2eb0cbd3a57&page=1&query=${search}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    const images = await fetchImages(data.results)
    return images
  } catch (error) {
    console.log(error);
  }
}

const fetchImages = (data) => {
  const imageArray = data.map(image => {
    return image.urls.regular
  })
  return Promise.all(imageArray)
}
