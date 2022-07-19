package MVC.Repos;

import MVC.Models.Album;
import org.springframework.data.repository.CrudRepository;

public interface AlbumRepo extends CrudRepository<Album, Long> {
}
