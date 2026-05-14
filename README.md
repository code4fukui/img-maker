# img-maker

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple Deno web service that generates images using the OpenAI DALL-E API and caches the results.

## Features

-   Provides a simple web API endpoint for text-to-image generation.
-   Caches generated images to the local filesystem (`static/img/`) for instant retrieval on subsequent requests with the same prompt.
-   Uses a content-based hash of the prompt for the cache filename.

## Requirements

-   Deno runtime
-   OpenAI API key

## Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/code4fukui/img-maker.git
    cd img-maker
    ```

2.  Create a `.env` file and add your OpenAI API key:
    ```sh
    echo "OPENAI_API_KEY=sk-..." > .env
    ```

## Usage

1.  Start the server:
    ```sh
    deno serve -A --port 8888 img-maker.js
    ```
    The server will now be running on `http://localhost:8888`.

2.  Generate an image by making a GET request with a `prompt` query parameter. You can do this in your browser or with a command-line tool like `curl`.

    **Browser Example:**
    Open this URL in your web browser:
    ```
    http://localhost:8888/?prompt=a photo of an astronaut riding a horse on mars
    ```

    **cURL Example:**
    ```sh
    curl "http://localhost:8888/?prompt=a white cat" -o cat.png
    ```

    The server responds directly with a `image/png`. If no prompt is provided, it uses a default value.

## Running in the Background

A convenience script `run.sh` is provided to start the server on port 8000 in the background using `nohup`.

```sh
./run.sh
```

## License

MIT License