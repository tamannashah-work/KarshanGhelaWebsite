// Native fetch is used

const HOST = 'https://karshanghela.co.in';
const KEY = 'ff772b1b565c40c696a7faabbc5ff734';
const KEY_LOCATION = `${HOST}/${KEY}.txt`;

// List of URLs to submit
const urlList = [
    `${HOST}/`,
    `${HOST}/products`,
    `${HOST}/contact`,
    `${HOST}/about`
];

async function submitIndexNow() {
    console.log(`Submitting ${urlList.length} URLs to Bing...`);

    // For multiple URLs, it's better to use POST, but the user asked for the GET format with keyLocation.
    // The GET format only supports one URL at a time.
    // "Submit individual or bulk URLs with your key location as your URL parameter: Send one URL via an HTTP request"

    for (const url of urlList) {
        const bingUrl = new URL('https://www.bing.com/indexnow');
        bingUrl.searchParams.append('url', url);
        bingUrl.searchParams.append('key', KEY);
        bingUrl.searchParams.append('keyLocation', KEY_LOCATION);

        try {
            const response = await fetch(bingUrl.toString());
            if (response.ok) {
                console.log(`✅ Success for ${url}: ${response.status} ${response.statusText}`);
            } else {
                console.error(`❌ Failed for ${url}: ${response.status} ${response.statusText}`);
                const text = await response.text();
                console.error('Response:', text);
            }
        } catch (error) {
            console.error(`❌ Error submitting ${url}:`, error.message);
        }
    }
}

submitIndexNow();
