document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("tileGrid");
    const backContents = [
      { text: "..but do you remember the time when we went to our 1ST DATE with literally no prep... "},
      { imageUrl: "img1.jpg" },
      { text: "..but now you are a very important part of my life " },
      { imageUrl: "img2.jpg"},
      { text: "..but i'll never stop sketching you, cuz i love sketching happy memories." },
      { imageUrl: "img3.jpg" },
      { text: "..but i'll never leave you even if i say that i don't want you."},
      { imageUrl: "img4.jpg" },
      { text: "..but since you are my happy place, so even if my day gets ruined, even if that day is worst in my history I would still want it to end with US <3 " },
    ];
  
    for (let i = 0; i < 9; i++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      
      const contentContainer = document.createElement("div");
      contentContainer.className = "content-container";
      
      const frontContent = document.createElement("div");
      frontContent.className = "content front";
      frontContent.innerHTML = `<p style="font-family: 'Arial', sans-serif; padding:10px; "> I HATE YOU </p>`;
      
      const backContent = document.createElement("div");
      backContent.className = "content back";

      if (backContents[i].imageUrl) {
        // Include image only if imageUrl is present
        backContent.innerHTML = `
          <img src="${backContents[i].imageUrl}" alt="Image ${i + 1}" style="width: 100%; height: 100%; object-fit: cover;">
        `;
      } else {
        // Include text only if imageUrl is not present
        backContent.innerHTML = `
          <p style="font-family: 'Courier New', monospace; padding:35px; font-size:large;">${backContents[i].text}</p>
        `;
      }
      
      contentContainer.appendChild(frontContent);
      contentContainer.appendChild(backContent);
      
      tile.appendChild(contentContainer);
      grid.appendChild(tile);
    }
  
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => tile.addEventListener("click", () => flipTile(tile)));
  });
