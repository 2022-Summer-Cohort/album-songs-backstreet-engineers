package org.wcci.apimastery.Controllers;

import org.wcci.apimastery.Models.Album;
import org.wcci.apimastery.Models.Comment;
import org.wcci.apimastery.Repos.AlbumRepo;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.wcci.apimastery.Repos.SongRepo;
import org.springframework.web.bind.annotation.*;

@RestController
public class AlbumController {

    private AlbumRepo albumRepo;
    private SongRepo songRepo;

    public AlbumController(AlbumRepo albumRepo, SongRepo songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    @GetMapping("/api/albums")
    public Iterable<Album> retrieveAllAlbums() {
        return albumRepo.findAll();
    }

    @GetMapping("/api/album/{id}")
    public Album retrieveAlbumById(@PathVariable Long id) {
        return albumRepo.findById(id).get();
    }

    @PostMapping("/api/album/new")
    public Iterable<Album> addAlbum(@RequestBody Album albumToAdd){
        albumRepo.save(albumToAdd);
        return albumRepo.findAll();
    }

    @DeleteMapping("/api/album/{id}")
    public Iterable <Album> deleteAlbumById(@PathVariable Long id) {
        albumRepo.deleteById(id);
        return albumRepo.findAll();
    }

    @PatchMapping("/api/album/{id}/changeName")
    public Album albumChangeTitle(@RequestBody String newTitle,@PathVariable Long id){
        Album albumToChange = albumRepo.findById(id).get();
        albumToChange.changeTitle(newTitle);
        albumRepo.save(albumToChange);
        return albumToChange;
    }
    @PostMapping("/api/album/{id}/avgRating")
    public Album albumAvgRating (@PathVariable Long id) {
        Album albumToAdd = albumRepo.findById(id).get();
        albumToAdd.avgRating();
        albumRepo.save(albumToAdd);
        return albumToAdd;
    }

        @PostMapping("/api/album/{id}/addComment")
        public Album albumToAddCommentTo(@RequestBody Comment newComment, @PathVariable Long id) {
            Album albumToChange = albumRepo.findById(id).get();
            albumToChange.addComments(newComment);
            albumRepo.save(albumToChange);
            return albumToChange;
        }

    }
