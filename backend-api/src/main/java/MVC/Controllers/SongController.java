package MVC.Controllers;

import MVC.Models.Album;
import MVC.Models.Song;
import MVC.Repos.AlbumRepo;
import MVC.Repos.SongRepo;
import org.springframework.web.bind.annotation.*;

@RestController
public class SongController {

    private SongRepo songRepo;

    private AlbumRepo albumRepo;

    public SongController(SongRepo songRepo, AlbumRepo albumRepo) {
        this.songRepo = songRepo;
        this.albumRepo = albumRepo;
    }

    @GetMapping("/api/songs")
    public Iterable<Song> retrieveAllSongs() {
        return songRepo.findAll();
    }

    @GetMapping("/api/song/{id}")
    public Song retrieveSongById(@PathVariable Long id) {
        return songRepo.findById(id).get();
    }

    @PostMapping("/api/songs")
    public Iterable<Song> addSong(@RequestBody Song songToAdd) {
        songRepo.save(songToAdd);
        return songRepo.findAll();
    }

    @PatchMapping("/api/song/{id}/name")
    public Song songToChangeTitle(@RequestBody String newTitle, @PathVariable Long id) {
        Song songToChange = songRepo.findById(id).get();
        songToChange.changeTitle(newTitle);
        songRepo.save(songToChange);
        return songToChange;
    }

    @DeleteMapping("/api/song/{id}")
    public String deleteById(@PathVariable("id") Long id) {
        return "Delete by id called";
    }
}
