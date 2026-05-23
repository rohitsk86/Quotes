// 1. Select your existing HTML elements
const quoteText = document.getElementById('message');
const quoteButton = document.getElementById('myButton');

// 2. Define an async function to request a live quote
async function getLiveQuote() {
    try {
        // Change button text to show it is loading
        quoteButton.textContent = "Loading...";
        quoteButton.disabled = true;

        // Fetch a completely random quote from the public API
        const response = await fetch('https://dummyjson.com');

        
        if (!response.ok) {
            throw new Error('Network response failure');
        }

        // Convert the incoming network data into a readable JSON object
        const data = await response.json();

        // Update your page with the new quote and its author
        quoteText.textContent = `"${data.quote}" — ${data.author}`;

    } catch (error) {
        // Fallback text if the internet cuts out or the API is down
        quoteText.textContent = "Oops! Could not fetch a live quote right now. Please try again.";
        console.error('API Error:', error);
    } finally {
        // Reset the button state back to normal
        quoteButton.textContent = "Click Me";
        quoteButton.disabled = false;
    }
}

// 3. Trigger the function immediately when the page first loads
getLiveQuote();

// 4. Listen for button clicks to grab another random quote
quoteButton.addEventListener('click', getLiveQuote);
