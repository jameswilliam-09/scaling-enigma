export async function onRequest() {
  const IMAGE_URL = "https://raw.githubusercontent.com/jameswilliam-09/scaling-enigma/4181ed0c63ecd7f17c47b3188f2e0e650db45de3/5.svg";

  const response = await fetch(IMAGE_URL);

  if (!response.ok) {
    return new Response("GIF not found", { status: 404 });
  }

  return new Response(response.body, {
    status: 200,
    headers: {
      "Content-Type": "image/svg",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
