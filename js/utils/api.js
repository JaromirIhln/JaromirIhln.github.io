
export async function fetchData(filePath) {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  fetchData("./json/posts.json")
    .then((data) => {
      console.log("Data loaded successfully:", data);
    })
    .catch(error => console.error("Error loading data:", error));
