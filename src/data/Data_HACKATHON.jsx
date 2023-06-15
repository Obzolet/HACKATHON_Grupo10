
      let url_1 =
        "https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/rutina2019";

      fetch(url_1)
        .then((response) => response.json())
        .then((json) => {
          // Do something with the data

          console.log(json.rutina20195);
        });
/**/
      let url_2 =
        "https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/diccionario";

      fetch(url_2)
        .then((response) => response.json())
        .then((json) => {
          //Do something with the data

          console.log(json.diccionarios);
        });

      let url_3 =
        "https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/cie10";

      fetch(url_3)
        .then((response) => response.json())
        .then((json) => {
          // Do something with the data

          console.log(json.cie105);
        });

      let url_4 =
        "https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/divipola";

      fetch(url_4)
        .then((response) => response.json())
        .then((json) => {
          // Do something with the data

          console.log(json.divipolas);
        });



