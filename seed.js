async function getData() {
  let request = await fetch(" https://shopapi-5dxh.onrender.com/api/products/");
  let response = await request.json();
  console.log(response);
}

getData();