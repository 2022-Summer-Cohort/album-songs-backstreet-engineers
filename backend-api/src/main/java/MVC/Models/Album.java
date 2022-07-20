package MVC.Models;

import javax.persistence.*;
import javax.xml.stream.events.Comment;
import java.util.Collection;
@Entity
public class Album {
    @Id @GeneratedValue
    private long id;
    private String title;
    @OneToMany(mappedBy = "album")
    private Collection<Song> songs;
    @ManyToMany
    private Collection<Artist> artists;

    private String imageUrl;

    private double avgRating;

    private String recordLabel;



    @OneToMany
    private Collection<Comment> comments;

    public Album(String title, Collection<Song> songs, Collection<Artist> artists,String imageUrl,
                 Collection<Comment> comments,double avgRating, String recordLabel) {
        this.title = title;
        this.songs = songs;
        this.artists = artists;
        this.imageUrl = imageUrl;
        this.comments =comments;
        this.avgRating = avgRating;
        this.recordLabel = recordLabel;
        

    }

    public void changeTitle(String newTitle){
        title = newTitle;
    }

    public Album(String title) {
        this.title = title;
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

    public Collection<Artist> getArtists() {
        return artists;
    }

    public String getImageUrl() {
        return imageUrl;
    }
    public double getAvgRating() {
        return avgRating;
    }

    public String getRecordLabel() {
        return recordLabel;
    }

    public Collection<Comment> getComments() {
        return comments;
    }

    public long albumDuration(){
        long duration= 0l;
        for(Song song : songs){
            duration += song.getDuration();
        }
        return duration;
    }
    public void updateAvgRating() {
        double sum = 0;
        for (Song song: songs) {
            sum += song.getRatings();
        }
        avgRating = sum / songs.size();
    }


}
