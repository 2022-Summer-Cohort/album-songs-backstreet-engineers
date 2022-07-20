package MVC.Controllers;

import MVC.Models.Album;
import MVC.Models.Song;
import MVC.Repos.AlbumRepo;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class AlbumController {

    private AlbumRepo albumRepo;

    public AlbumController(AlbumRepo albumRepo) {
        this.albumRepo = albumRepo;
    }

    @PostMapping("/api/albums/{id}/avgRating")
    public Album albumToUpdateAvgRating (@RequestBody String avgRating, @PathVariable Long id) {
    Album albumToAdd = albumRepo.findById(id).get();
    albumToAdd.updateAvgRating();
    albumRepo.save(albumToAdd);
    return albumToAdd;
    }
}
