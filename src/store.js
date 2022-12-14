import { reactive } from 'vue'

// Importo lo "store"
export const store = reactive({
    // Dichiaro la "characterList" che ricever√† le informazioni dall' "API".
    characterList: [],
    // Dichiaro l'url dell' "API".
    apiURL: "https://rickandmortyapi.com/api/character",
    titolo: "Rick and Morty App",
    // Creo "searchStatus" con la "stringa vuota" per dare la possibilit√† all'utente di selezionare la "Select Category".
    searchStatus: "",
    // Creo "apiParameter" che importer√≤ nella condizione.
    apiParameter: "status",
});