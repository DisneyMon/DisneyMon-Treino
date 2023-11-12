package br.com.faculdade.pi.repository;

import br.com.faculdade.pi.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    @Query("SELECT usuario FROM Usuario usuario WHERE usuario.email = :emailUsuario AND usuario.senha = :senhaUsuario")
    public Optional<Usuario> findLogin(@Param("emailUsuario") String email, @Param("senhaUsuario") String senha);
}
