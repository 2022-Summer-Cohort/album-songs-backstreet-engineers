package MVC.Models;

import javax.persistence.*;
import javax.xml.stream.events.Comment;
import java.util.Collection;
@Entity
public class Song {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private long duration;
    @ManyToOne
    private Album album;

    @OneToMany
    private Collection<Comment> comments;

    private double ratings;
    @ManyToMany
    private Collection<Artist> artists;

    public Song(String title, long duration, Album album, Collection<Comment> comments,
                double ratings, Collection<Artist> artists) {
        this.title = title;
        this.duration = duration;
        this.album = album;
        this.comments = comments;
        this.ratings = ratings;
        this.artists = artists;
    }

    public Song() {
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public long getDuration() {
        return duration;
    }

    public Album getAlbum() {
        return album;
    }

    public Collection<Comment> getComments() {
        return comments;
    }

    public double getRatings() {
        return ratings;
    }

    public Collection<Artist> getArtists() {
        return artists;
    }

    public void changeTitle(String newTitle) {
        title = newTitle;
    }

    public void addRatings(String newRatings) {
    }
}