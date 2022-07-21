package org.wcci.apimastery.Repos;

import org.wcci.apimastery.Models.Song;
import org.springframework.data.repository.CrudRepository;

public interface SongRepo extends CrudRepository<Song, Long> {
}
