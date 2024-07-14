// JavaScript code
function searchMusic() {
    const searchQuery = document.getElementById('search').value;
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&key=AIzaSyB98uvRaRRTQBPJCJWMx94u7HM_s9aKTeI`)
      .then(response => response.json())
      .then(data => {
        const results = document.getElementById('results');
        results.innerHTML = '';
        data.items.forEach(item => {
          const videoId = item.id.videoId;
          const title = item.snippet.title;
          const videoElement = document.createElement('div');
          videoElement.innerHTML = `
            <h3>${title}</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          `;
          results.appendChild(videoElement);
        });
      })
      .catch(error => console.error('Error:', error));
  }
  