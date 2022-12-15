import { reactive } from 'vue'

// Importo lo "store"
export const store = reactive({
    // Dichiaro la "characterList" che riceverà le informazioni dall' "API".
    characterList: [],
    // Dichiaro l'url dell' "API".
    apiURL: "https://rickandmortyapi.com/api/character",
    titolo: "Rick and Morty App",
    // Creo "searchStatus" con la "stringa vuota" per dare la possibilità all'utente di selezionare la "Select Category".
    searchStatus: "",
    // Creo "apiParameter" che importerò nella condizione.
    apiParameter: "status",
});