package org.wcci.apimastery.Repos;

import org.wcci.apimastery.Models.Album;
import org.springframework.data.repository.CrudRepository;

public interface AlbumRepo extends CrudRepository<Album, Long> {
}
