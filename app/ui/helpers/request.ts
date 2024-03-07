interface GetDataNews {
  query?: string
}

export async function getDataNews(params: GetDataNews): Promise<any> {
  try {
    let defaultParams = `top-headlines?from=2024-03-07&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&country=us`;
    if (params?.query) {
      defaultParams = `everything?sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&q=${params?.query ?? ''}&pageSize=50`
    }
    const response = await fetch(`https://newsapi.org/v2/${defaultParams}`, {
      method: 'get',
    });
    return response.json();
  } catch (err) {
    return [];
  }
}