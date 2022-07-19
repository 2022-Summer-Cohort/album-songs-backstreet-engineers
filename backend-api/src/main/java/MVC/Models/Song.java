package MVC.Models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.util.Collection;

public class Song {
    @Id @GeneratedValue
    private long id;
    private String title;
    private long duration;
    @ManyToOne
    private Album album;
    @ManyToMany
    private Collection<Artist> artists;

    public Song(String title, long duration, Album album) {
        this.title = title;
        this.duration = duration;
        this.album = album;
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

    public Collection<Artist> getArtists() {
        return artists;
    }
}
