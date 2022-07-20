package MVC.Controllers;

import MVC.Models.Song;
import MVC.Repos.SongRepo;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class SongController {
    private SongRepo songRepo;

    public SongController(SongRepo songRepo) {
        this.songRepo = songRepo;
    }

    @PostMapping("/api/songs/{id}/ratings")
    public Song songToAddRating (@RequestBody String newRatings, @PathVariable Long id){

        Song songToAdd = songRepo.findById(id).get();
        songToAdd.addRatings(newRatings);
        songRepo.save(songToAdd);
        return songToAdd;

    }
}
