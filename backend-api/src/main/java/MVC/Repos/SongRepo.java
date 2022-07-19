package MVC.Repos;

import MVC.Models.Song;
import org.springframework.data.repository.CrudRepository;

public interface SongRepo extends CrudRepository<Song, Long> {
}
