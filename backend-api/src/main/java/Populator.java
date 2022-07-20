import MVC.Models.Album;
import MVC.Models.Song;
import MVC.Repos.AlbumRepo;
import MVC.Repos.ArtistRepo;
import MVC.Repos.SongRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private AlbumRepo albumRepo;

    private SongRepo songRepo;

    private ArtistRepo artistRepo;

    public Populator(AlbumRepo albumRepo, SongRepo songRepo, ArtistRepo artistRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
        this.artistRepo = artistRepo;
    }


    @Override
    public void run(String...args) throws Exception {

       Album album1 = new Album("Bad" );
       albumRepo.save(album1);
       Song song1 = new Song("Bad", 4,album1);

}
