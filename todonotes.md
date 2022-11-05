1. W katalogu components stworzyc podfoldery
2. Jesli dany komponent uzywamy tylko w jednym miejscu, to lepiej przeniesc go do 'pages'
3.

Custom hooki. Dlaczego?

1. Reuzywalnosc
2. Osobne testowanie komponentu/hooka
3. Komponent jest duzo bardziej czytelny

W storze TRZYMAŁBYM TYLKO RZECZY, KTORE SA NAPRAWDE GLOBALNE

Roznice miedzy Reactem a Contextem. W ktorej sytuacji lepiej uzyc Contextu a w ktorej Redux?

Czym są hooki?

Poczytac o solidzie

  <!-- <Modal>
      <DeleteMovieContent />
    </Modal>  
  */ -->

Czym jest git flow?

// GUARD:
// if (state.clickedMovie !== null) {
// state.ownMovieList = state.ownMovieList.filter(
// (movie) => movie.id !== state.clickedMovie.id
// );
// }
},
// CLICKEDMOVIE! - TEN WYKRZYKNI OZNACZA, ZE CLICKEDMOVIE NA PEWNO NIE JEST ANI NULL ANI UNDEFINED
// removeMovie(state) {
// state.ownMovieList = state.ownMovieList.filter(
// (movie) => movie.id !== state.clickedMovie!.id
// );
// },

       // GUARD:
      // if (state.clickedMovie !== null) {
      //     state.ownMovieList = state.ownMovieList.filter(
      //         (movie) => movie.id !== state.clickedMovie.id
      //     );
      // }
