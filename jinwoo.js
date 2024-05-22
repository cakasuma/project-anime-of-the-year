fetch("anime-list.json")
        .then((response) => response.json())
        .then((animeList) => {
          if (animeList) {
            const animeListElement = document.getElementById("anime-list");

            animeList.forEach((anime) => {
              const animeElement = document.createElement("div");
              animeElement.classList.add("anime");

              const animeImage = document.createElement("img");
              animeImage.src = "https://via.placeholder.com/200x300";
              animeElement.appendChild(animeImage);

              const animeInfo = document.createElement("div");
              animeInfo.classList.add("info");

              const animeTitle = document.createElement("h2");
              animeTitle.textContent = anime.title;
              animeInfo.appendChild(animeTitle);

              const animeRating = document.createElement("p");
              animeRating.textContent = `Rating: ${anime.rating}/10`;
              animeInfo.appendChild(animeRating);

              const animeViewers = document.createElement("p");
              animeViewers.textContent = `Viewers: ${anime.viewers}`;
              animeInfo.appendChild(animeViewers);

              const animeEpisodes = document.createElement("p");
              animeEpisodes.textContent = `Episodes: ${anime.episodes}`;
              animeInfo.appendChild(animeEpisodes);

              const animeSeason = document.createElement("p");
              animeSeason.textContent = `Season: ${anime.season}`;
              animeInfo.appendChild(animeSeason);

              const animeCharacters = document.createElement("div");
              animeCharacters.classList.add("characters");

              const charactersTitle = document.createElement("h3");
              charactersTitle.textContent = "Characters";
              animeCharacters.appendChild(charactersTitle);

              const charactersList = document.createElement("ul");
              charactersList.classList.add("character-list");
              animeCharacters.appendChild(charactersList);

              anime.characters.forEach((character) => {
                const characterItem = document.createElement("li");
                characterItem.textContent = `${character.name} (${character.role})`;
                charactersList.appendChild(characterItem);
              });

              animeElement.appendChild(animeInfo);
              animeElement.appendChild(animeCharacters);
              animeListElement.appendChild(animeElement);
            });
          }
        });