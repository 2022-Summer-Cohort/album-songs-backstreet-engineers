package MVC.Controllers;

import MVC.Models.Album;
import MVC.Models.Song;
import MVC.Repos.AlbumRepo;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import MVC.Repos.SongRepo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
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
    private SongRepo songRepo;


    public AlbumController(AlbumRepo albumRepo, SongRepo songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    @GetMapping("/api/album")
    public Iterable<Album> retrieveAllAlbum() { return albumRepo.findAll(); }

    @GetMapping("/api/album/{id}")
    public Album retrieveAlbumById(@PathVariable Long id) { return albumRepo.findById(id).get(); }


    @PostMapping("/api/album")
    public Iterable<Album> addSong(@RequestBody Album albumToAdd){
        albumRepo.save(albumToAdd);
        return albumRepo.findAll();
    }

    @DeleteMapping("/api/album/{id}")
    public String deleteById(@PathVariable ("id") Long id) {
        return "Delete by id called";
    }







    @PatchMapping("/api/album/{id}/name")
    public Album albumChangeTitle(@RequestBody String newTitle,@PathVariable Long id){
        Album albumToChange = albumRepo.findById(id).get();
        albumToChange.changeTitle(newTitle);
        albumRepo.save(albumToChange);
        return albumToChange;
    }




}
