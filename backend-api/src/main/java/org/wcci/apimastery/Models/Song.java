package org.wcci.apimastery.Models;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Song {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String duration;
    private String artist;
    @ManyToOne
    private Album album;
    @ElementCollection
    private Collection<String> comments;
    @ElementCollection
    private Collection<Double> ratings;

    public Song(String title, String artist,  String duration, Album album){
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.album = album;
    }
    public Song() {
    }

    public Collection<Double> getRatings() {
        return ratings;
    }
    public double avgRating(){
        double sum = 0;
        for (double rating: ratings){
            sum += rating;
        }
        return sum/ratings.size();
    }
    public long getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public String getDuration() {
        return duration;
    }
    public Album getAlbum() {
        return album;
    }
    public Collection<String> getComments() {
        return comments;
    }

    public void changeTitle(String newTitle){
        title = newTitle;
    }

    public void addRatings(double newRatings) {
        ratings.add(newRatings);
    }
    public void addComment(String newComment){
        comments.add(newComment);
    }
}