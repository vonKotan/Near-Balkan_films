import { useState , useEffect} from "react";
import { useTranslation } from "react-i18next";

export function useFilterMovies(movies, search){
    const [filteredMovies, setFilteredMovies] = useState([])

    const {t, i18n} = useTranslation()
    useEffect(() => {
        if (search) {
          const filter = movies?.filter((movie) => {
            let title
            if(i18n.language === 'en' && movie.englishTitle){
              title = movie.englishTitle
            } else title = movie.title
            return title.toLowerCase().includes(search.toLowerCase())
          }
          );
    
          setFilteredMovies(filter);
        }
      }, [search, movies, i18n.language]);

      return {filteredMovies}
}