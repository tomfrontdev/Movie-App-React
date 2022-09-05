# todo app z listą ulubionych

# Technologie:

React, Redux-toolkit, Routing

## wymagania:

### A - strona główna:

- strona główna pobiera filmy/seriale z api: `https://www.tvmaze.com/api`
- na stronie głównej jest search input - wpiszesz początek nazwy serialu i pobierze się lista dostepnych seriali. Input MUSI BYĆ `debounced`
- na stornie głównej jest przycisk którego kliknięcie odświeży (pobierze jeszcze raz) seriale ZGODNIE Z WPISANYM search value
- elementy na liście muszą mieć przycisk który doda (jeśli jeszcze go tam nie ma) item do listy ulubionych (lista ulubionych będzie na osobnym widoku) lub usunie z listy ulubionych (jeśli już jest na liście ulubionych)
- za kazdym razem jak wejdziesz na stronę to nastepuje ponowne pobranie listy seriali
- na czas pobierania musi calą listę elementów przkryć półprzezroczystym divem z ze spinerem na środku. Spiner ze strony: `https://loading.iox/css/`
- w razie jakby nie udało się pobrać danych to wyswietla napis "nie udało się pobrać danych" (będę to testował)

### B - lista ulubionych

- wyswietla elementy oznaczone jako ulubione
- można usunąć item z listy ulubionych

### C - lista własnch filmów (coś osobnego niż te pobrane z API)

- wyświetla seriale dodane samemu na stornie dodawania (dane o liscie własnych elementow trzymane sa w redux)
- kazdy item posiada ikonkę usuwania oraz edycji
- kliknięcie w usuwanie spowoduje pokazanie się modala który zapyta czy na pewno usunąć item, potwierdzenie usuwa
- kliknięcie w ikonkę edycji przenosi na nowy widok gdzie masz formularz w którym możesz edytować dane itemu i zapisać (zapisuje w redux)

### D - widok dodawania itemu

- zawiera formularz oddawani nowego własnego filmu/serialu
- korzysta z tego samego formularza co strona edycji danego itemu

### E - strona edycji własnego serialu

- zawiera formularz z już wypełnionymi danymi danego serialu
- musi wykorzystać ten sam formularz co widok dodawania
- w adresie url musi być umieszczony adres `id` danego itemu na podstawie którego wyciągnie odpowiedni item z redux

### F - pozostałe adresy

- przejście na jakikolwiek inny adres url spowoduje wyświetlenie strony z jakimś napisem "404 - nie znaleziono" oraz przyciskiem przekierowujacym an stronę główną
