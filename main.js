fetch("data/resources.json")
.then(res => res.json())
.then(data => {
  const list = document.getElementById("resourceList");

  data.services.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    list.appendChild(li);
  });
});
