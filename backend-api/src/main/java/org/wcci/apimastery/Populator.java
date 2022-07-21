package org.wcci.apimastery;

import org.wcci.apimastery.Models.Album;
import org.wcci.apimastery.Models.Song;
import org.wcci.apimastery.Repos.AlbumRepo;
import org.wcci.apimastery.Repos.SongRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {
    private AlbumRepo albumRepo;
    private SongRepo songRepo;

    public Populator(AlbumRepo albumRepo, SongRepo songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Album album1 = new Album("Bad", "Michael Jackson", "48 min, 40 sec", "badCover","Epic CBS");
        albumRepo.save(album1);
        Song song1 = new Song("Bad", "Michael Jackson", "4:07", album1);
        Song song2 = new Song("The Way You Make Me Feel", "Michael Jackson", "4:58", album1 );
        Song song3 = new Song("Speed Demon", "Michael Jackson", "4:02", album1);
        Song song4 = new Song("Liberian Girl", "Michael Jackson", "3:52", album1 );
        Song song5 = new Song("Just Good Friends", "Michael Jackson", "4:06", album1 );
        Song song6 = new Song("Another Part of Me", "Michael Jackson", "3:54", album1 );
        Song song7 = new Song("Main in the Mirror", "Michael Jackson", "4:06", album1 );
        Song song8 = new Song("I Just Can't Stop Loving You (feat. Siedah Garrett)", "Michael Jackson", "3:54", album1 );
        Song song9 = new Song("Dirty Diana", "Michael Jackson", "5:18", album1 );
        Song song10 = new Song("Smooth Criminal", "Michael Jackson", "4:11", album1);
        Song song11 = new Song("Leave Me Alone", "Michael Jackson", "4:40", album1);
        songRepo.save(song1); songRepo.save(song2); songRepo.save(song3); songRepo.save(song4); songRepo.save(song5); songRepo.save(song6); songRepo.save(song7); songRepo.save(song8);
        songRepo.save(song9); songRepo.save(song10); songRepo.save(song11);
        albumRepo.save(album1);

        Album album2 = new Album("Paper Castle", "Joe Hertler & The Rainbow Seekers", "52 min, 1 sec","paperCastleCover", "AntiFragile Music");
        albumRepo.save(album2);
        Song song12 = new Song("Underwater", "Joe Hertler & The Rainbow Seekers", "5:23", album2);
        Song song13 = new Song("Loser", "Joe Hertler & The Rainbow Seekers", "3:45", album2);
        Song song14 = new Song("Slow Burn", "Joe Hertler & The Rainbow Seekers", "3:53", album2);
        Song song15 = new Song("Evening Coffee", "Joe Hertler & The Rainbow Seekers", "4:06", album2);
        Song song16 = new Song("Passing Through", "Joe Hertler & The Rainbow Seekers", "5:00", album2);
        Song song17 = new Song("Last Two Dinosaurs Alive", "Joe Hertler & The Rainbow Seekers", "4:22", album2);
        Song song18 = new Song("Waiting", "Joe Hertler & The Rainbow Seekers", "5:28", album2);
        Song song19 = new Song("This Is the Future", "Joe Hertler & The Rainbow Seekers", "4:10", album2);
        Song song20 = new Song("When the Morning Comes", "Joe Hertler & The Rainbow Seekers", "3:30", album2);
        Song song21 = new Song("Fading Marks", "Joe Hertler & The Rainbow Seekers", "4:36", album2);
        Song song22 = new Song("Beautiful Day", "Joe Hertler & The Rainbow Seekers", "3:26", album2);
        Song song23 = new Song("Death Don't Worry About Me", "Joe Hertler & The Rainbow Seekers", "4:20", album2);
        songRepo.save(song12);songRepo.save(song13);songRepo.save(song14);songRepo.save(song15);songRepo.save(song16);songRepo.save(song17);
        songRepo.save(song18);songRepo.save(song19);songRepo.save(song20);songRepo.save(song21);songRepo.save(song22);songRepo.save(song23);
        albumRepo.save(album2);

        Album album3 = new Album("Heroes", "David Bowie", "40 min, 44 sec", "bowieCover", "RCA Records");
        albumRepo.save(album3);
        Song song32 = new Song("Beauty and the Beast", "David Bowie", "3:36", album3);
        Song song33 = new Song("Joe the Lion", "David Bowie", "3:08", album3);
        Song song24 = new Song("Heroes", "David Bowie", "6:11", album3);
        Song song25 = new Song("Sons of the Silent Age", "David Bowie", "3:20", album3);
        Song song26 = new Song("Blackout", "David Bowie", "3:49", album3);
        Song song27 = new Song("V-2 Schneider", "David Bowie", "3:11", album3);
        Song song28 = new Song("Sense of Doubt", "David Bowie", "3:59", album3);
        Song song29 = new Song("Moss Garden", "David Bowie", "5:05", album3);
        Song song30 = new Song("Neukoln", "David Bowie", "4:34", album3);
        Song song31 = new Song("The Secret Life of Arabia", "David Bowie", "3:46", album3);
        songRepo.save(song32); songRepo.save(song33); songRepo.save(song24); songRepo.save(song25); songRepo.save(song26);
        songRepo.save(song27); songRepo.save(song28); songRepo.save(song29); songRepo.save(song30); songRepo.save(song31);
        albumRepo.save(album3);
    }
}
