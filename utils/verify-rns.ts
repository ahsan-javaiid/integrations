const checkRNSTx = async (address: string) => {
  let found = false; 
  const response = await fetch(`https://rootstock.blockscout.com/api/v2/addresses/${address.toLowerCase()}/transactions`);
  if (response.ok) {
    console.log(response);
    const transactions =  await response.json();
    console.log('tx:', transactions);
    
    for (const item of transactions.items) {
      if (item.status === 'ok' && item.method === 'commit' && item.to && item.to.hash === '0xD9C79ced86ecF49F5E4a973594634C83197c35ab') {
        found = true;
      }
    }

    return Promise.resolve(found);
  } else {
    const error = await response.json();
    console.log('error in fetching tx:', error);
    return Promise.resolve(found);
  }
}