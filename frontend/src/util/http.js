export async function getData(url) {
  const response = await fetch(url);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(
      "We couldn’t load the meals. Please try again." || data.message,
    );
  }
  return resData;
}

export async function postData(order, url) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ order }),
  });
  if (!response.ok) {
    throw new Error(
      "Oops! Your order wasn’t sent successfully. Please try again." ||
        data.message,
    );
  }
  return;
}
