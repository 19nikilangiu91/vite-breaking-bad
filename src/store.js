import { reactive } from 'vue'

// Importo lo "store"
export const store = reactive({
    // Dichiaro la "characterList" che riceverà le informazioni dall' "API".
    characterList: [],
    // Dichiaro l'url dell' "API".
    apiURL: "https://rickandmortyapi.com/api/character"
});