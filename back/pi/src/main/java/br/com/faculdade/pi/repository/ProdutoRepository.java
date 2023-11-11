package br.com.faculdade.pi.repository;

import br.com.faculdade.pi.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ProdutoRepository extends JpaRepository<Produto, Integer>{
}
