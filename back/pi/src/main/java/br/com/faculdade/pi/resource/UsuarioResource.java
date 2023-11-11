package br.com.faculdade.pi.resource;

import br.com.faculdade.pi.entities.Usuario;
import br.com.faculdade.pi.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioResource {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<Usuario> findById(@PathVariable int id){
        Usuario usuario = usuarioService.findById(id);
        return ResponseEntity.ok().body(usuario);
    }

    @GetMapping(value = "/login")
    public ResponseEntity<Usuario> login(
            @RequestParam(name = "email", defaultValue = "") String email,
            @RequestParam(name = "senha", defaultValue = "") String senha){

        Usuario usuario = usuarioService.login(email, senha);

        if(email.equals("") || senha.equals("") || usuario == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(usuario);
    }

    @GetMapping(value = "/")
    public ResponseEntity<List<Usuario>> findAll(){
        List<Usuario> usuario = usuarioService.findAll();
        return ResponseEntity.ok().body(usuario);
    }

    @PostMapping(value = "/")
    public ResponseEntity<Usuario> gravarUsuario(@RequestBody Usuario usuario){

        usuario = usuarioService.insertUsuario(usuario);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(usuario.getIdUsuario()).toUri();
        return ResponseEntity.created(uri).body(usuario);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id){
        usuarioService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Usuario> update(@PathVariable int id, @RequestBody Usuario usuario){
        Usuario usuario_alterado = usuarioService.updatUsuario(id, usuario);
        return ResponseEntity.ok().body(usuario_alterado);
    }
}


