package org.wcci.apimastery.Controllers;

import org.wcci.apimastery.Models.Album;
import org.wcci.apimastery.Models.Song;
import org.wcci.apimastery.Repos.AlbumRepo;
import org.wcci.apimastery.Repos.SongRepo;
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

    @GetMapping("/api/songs/{id}")
    public Song retrieveSongById(@PathVariable Long id) {
        return songRepo.findById(id).get();
    }

    @PostMapping("/api/album/{id}/newsong")
    public Album addNewSong(@RequestBody Song songToAdd, @PathVariable Long id) {
        Album addSongTo = albumRepo.findById(id).get();
        songRepo.save(songToAdd);
        albumRepo.save(addSongTo);
        return addSongTo;
    }

    @PatchMapping("/api/songs/{id}/name")
    public Song songToChangeTitle(@RequestBody String newTitle, @PathVariable Long id) {
        Song songToChange = songRepo.findById(id).get();
        songToChange.changeTitle(newTitle);
        songRepo.save(songToChange);
        return songToChange;
    }
    @PostMapping("/api/songs/{id}/ratings")
    public Song songToAddRating (@RequestBody double newRating, @PathVariable Long id){
        Song songToAdd = songRepo.findById(id).get();
        songToAdd.addRating(newRating);
        songRepo.save(songToAdd);
        return songToAdd;
    }
    @DeleteMapping("/api/songs/{id}")
    public String deleteById(@PathVariable("id") Long id) {
        return "Delete by id called";
    }
}


