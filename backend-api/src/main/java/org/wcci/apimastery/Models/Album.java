package org.wcci.apimastery.Models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
@Entity
public class Album {
    @Id @GeneratedValue
    private long id;
    private String title;
    @OneToMany(mappedBy="album", cascade= CascadeType.ALL,orphanRemoval = true)
    private Collection<Song> songs;
    private String artist;
    private String duration;
    private String imageUrl;
    private double avgRating;
    private String recordLabel;
    @ElementCollection
    private Collection<Comment> comments;

    public Album(String title, String artist, String duration, String imageUrl, String recordLabel) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.imageUrl = imageUrl;
        this.recordLabel = recordLabel;
        this.comments = new ArrayList<>();
        this.songs = new ArrayList<>();
    }
    public Album() {
    }

    public long getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public Collection<Song> getSongs() {
        return songs;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public double getAvgRating() {
        avgRating = avgRating();
        return avgRating;
    }
    public String getRecordLabel() {
        return recordLabel;
    }
    public Collection<Comment> getComments() {
        return comments;
    }
    public String getArtist() {
        return artist;
    }
    public String getDuration(){
        return duration;
    }


    public void changeTitle(String newTitle){
        title = newTitle;
    }

    public void addSongToAlbum(Song songToAdd){
        songs.add(songToAdd);
    }
    public void addComments(Comment newComment){
        comments.add(newComment);
    }

    public double avgRating() {
        double sum = 0;
        for (Song song: songs) {
            sum += song.avgRating();
        }
//        return (sum / songs.size());
        return Math.round((((sum/songs.size()) * 100)) / 100);
    }
}
