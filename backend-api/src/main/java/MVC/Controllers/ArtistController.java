package MVC.Controllers;

import MVC.Repos.ArtistRepo;
import MVC.Models.Artist;
import org.springframework.web.bind.annotation.*;

@RestController
public class ArtistController {
    private ArtistRepo artistRepo;

    public ArtistController(ArtistRepo artistRepo){
        this.artistRepo = artistRepo;
    }

    @GetMapping("/api/artists")
    public Iterable<Artist> retrieveAllArtist(){
        return artistRepo.findAll();
    }

    @GetMapping("/api/artists/{id}")
    public Artist retrieveArtistById(@PathVariable Long id){
        return (Artist) artistRepo.findById(id).get();
    }

    @PostMapping("api/artists")
    public Iterable<Artist> addArtist(@RequestBody Artist artistToAdd){
        artistRepo.save(artistToAdd);
        return artistRepo.findAll();
    }

    @PutMapping("/api/artists")
    public Iterable<Artist> editArtist(@RequestBody Artist artistToEdit){
        if(artistToEdit.getId()!=null){
            artistRepo.save(artistToEdit);
        }
        return artistRepo.findAll();
    }

//    @PatchMapping("/api/artists/{id}/location")
//    public Artist artistToChangeLocation(@RequestBody String newLocation, @PathVariable Long id){
//        Artist artistToChange = (Artist) artistRepo.findById(id).get();
//        artistToChange.changeLocation(newLocation);
//        artistRepo.save(artistToChange);
//        return artistToChange;
//    }


}
