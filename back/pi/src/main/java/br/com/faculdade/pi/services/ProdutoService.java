package br.com.faculdade.pi.services;

import br.com.faculdade.pi.entities.Produto;
import br.com.faculdade.pi.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    ProdutoRepository produtoRepository;

    public Produto findById(int idProduto){
        Optional<Produto> produto = produtoRepository.findById(idProduto);
        return produto.orElse(null);
    }

    public List<Produto> findAll(){
        List<Produto> produto = produtoRepository.findAll();
        return produto;
    }
    public void deleteById(int idProduto){
        produtoRepository.deleteById(idProduto);
    }
    public Produto insertProduto(Produto produto){
        return produtoRepository.save(produto);
    }

    public Produto updatProduto(int idProduto, Produto produto){
        Produto produto_alterar = findById(idProduto);
        if(produto_alterar == null){
            return null;
        }
        produto_alterar.setNome(produto.getNome());
        produto_alterar.setDescricao(produto.getDescricao());
        produto_alterar.setPreco(produto.getPreco());
        produto_alterar.setImagemUrl(produto.getImagemUrl());
        return produtoRepository.save(produto_alterar);
    }

}
