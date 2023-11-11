package br.com.faculdade.pi.services;

import br.com.faculdade.pi.entities.Usuario;
import br.com.faculdade.pi.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    public Usuario findById(int idUsuario){
        Optional<Usuario> usuario = usuarioRepository.findById(idUsuario);
        return usuario.orElse(null);
    }

    public Usuario login(String email, String senha){
        Optional<Usuario> usuario = usuarioRepository.findLogin(email, senha);
        return usuario.orElse(null);
    }

    public List<Usuario> findAll(){
        List<Usuario> usuarios = usuarioRepository.findAll();
        return usuarios;
    }
    public void deleteById(int idUsuario){
        usuarioRepository.deleteById(idUsuario);
    }
    public Usuario insertUsuario(Usuario usuario){
       return usuarioRepository.save(usuario);
    }

    public Usuario updatUsuario(int idUsuario, Usuario usuario){
        Usuario usuario_alterar = findById(idUsuario);
        if(usuario_alterar == null){
            return null;
        }
        usuario_alterar.setNome(usuario.getNome());
        usuario_alterar.setEmail(usuario.getEmail());
        usuario_alterar.setSenha(usuario.getSenha());
        return usuarioRepository.save(usuario_alterar);
    }

}
