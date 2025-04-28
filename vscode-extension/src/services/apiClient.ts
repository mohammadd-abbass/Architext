

export async function callFlaskAPI(route: string, payload: any) {
    const res = await fetch(`http://localhost:5000/${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }
  
    return res.json();
  }