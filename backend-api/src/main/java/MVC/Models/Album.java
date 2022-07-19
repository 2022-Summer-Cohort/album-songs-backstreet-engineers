package MVC.Models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.util.Collection;

public class Album {
    @Id @GeneratedValue
    private long id;
    private String title;
    @OneToMany(mappedBy = "album")
    private Collection<Song> songs;
    @ManyToMany
    private Collection<Artist> artists;

    public Album(String title, Collection<Song> songs, Collection<Artist> artists) {
        this.title = title;
        this.songs = songs;
        this.artists = artists;
    }

    public Album() {
    }
    public long albumDuration(){
        long duration= 0l;
        for(Song song : songs){
            duration += song.getDuration();
        }
        return duration;
    }
}
