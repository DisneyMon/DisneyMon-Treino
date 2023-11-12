package br.com.faculdade.pi.resource;


import br.com.faculdade.pi.entities.Produto;
import br.com.faculdade.pi.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/produtos")
@CrossOrigin(origins = "*")
public class ProdutoResource {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<Produto> findById(@PathVariable int id){
        Produto produto = produtoService.findById(id);
        return ResponseEntity.ok().body(produto);
    }

    @GetMapping(value = "/")
    public ResponseEntity<List<Produto>> findAll(){
        List<Produto> produto = produtoService.findAll();
        return ResponseEntity.ok().body(produto);
    }

    @PostMapping(value = "/")
    public ResponseEntity<Produto> gravarProduto(@RequestBody Produto produto){

        produto = produtoService.insertProduto(produto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(produto.getIdProduto()).toUri();
        return ResponseEntity.created(uri).body(produto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id){
        produtoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Produto> update(@PathVariable int id, @RequestBody Produto produto){
        Produto produto_alterado = produtoService.updatProduto(id, produto);
        return ResponseEntity.ok().body(produto_alterado);
    }
}

