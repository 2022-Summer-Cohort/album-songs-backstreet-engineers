package MVC.Repos;

import MVC.Models.Artist;
import org.springframework.data.repository.CrudRepository;

public interface ArtistRepo extends CrudRepository<Artist, Long> {
}
