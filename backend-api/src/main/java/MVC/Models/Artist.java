package MVC.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Artist {
    @Id@GeneratedValue
    private Long id;
    private String name;
    @ManyToMany (mappedBy = "artist")
    @JsonIgnore
    private Collection<Song> songs;
    @ManyToMany (mappedBy = "artist")
    @JsonIgnore
    private Collection<Album> albums;

    public Artist(String name, Collection<Song> songs, Album...albums) {
        this.name = name;
        this.songs = songs;
        this.albums = Arrays.asList(albums);
    }

    public Artist() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
    //    public void changeLocation(String newLocation){
//        location = newLocation;
//    }
}
