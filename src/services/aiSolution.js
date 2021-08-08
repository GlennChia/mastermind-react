export const aiSolution = async (model, target, numColors = 5) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      numColors: numColors,
      target: target,
    }),
  };
  const response = await fetch(
    `http://localhost:5000/${model}`,
    requestOptions
  );
  const data = await response.json();
  return [data.board, data.state];
};
