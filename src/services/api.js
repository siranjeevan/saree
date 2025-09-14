// SheetDB API service
const API_BASE_URL = 'https://sheetdb.io/api/v1/'

export const fetchSareesFromSheet = async (apiId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${apiId}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return Array.isArray(data) ? data : [data]
  } catch (error) {
    console.error('Error fetching sarees from SheetDB:', error)
    throw error
  }
}

export const fetchFromGoogleSheet = async () => {
  const API_ID = 'yo0fme3r8h8ca' 
  return await fetchSareesFromSheet(API_ID)
}