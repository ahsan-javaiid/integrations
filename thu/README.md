### Verify User retweets

```
const axios = require('axios');

async function checkIfUserRetweeted() {
  try {
    const response = await axios.get(`https://api.twitterpicker.com/tweet/retweets?id=1724758703067234652`);

    console.log('res', response.data.length);
  } catch (error) {
    console.error('Error checking retweet status:', error.response ? error.response.data : error.message);
  }
}

// Call the function to check if the user retweeted a specific tweet
checkIfUserRetweeted();

```