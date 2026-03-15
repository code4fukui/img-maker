# img-maker
A tool for generating images using the DALL-E API from OpenAI.

## Features
- Generates images using the DALL-E API from OpenAI
- Caches generated images to local storage for faster retrieval

## Requirements
- Deno runtime
- OpenAI API key

## Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/code4fukui/img-maker.git
   cd img-maker
   ```
2. Create a `.env` file and add your OpenAI API key:
   ```sh
   cat > .env
   OPENAI_API_KEY=***
   ```
3. Start the server:
   ```sh
   deno serve -A --port 8888 img-maker.js
   ```

## License
MIT License