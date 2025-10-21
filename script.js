document.getElementById('helloButton').addEventListener('click', () => {
  const now = new Date().toLocaleTimeString();
  document.getElementById('output').textContent = `You clicked at ${now}`;
});

