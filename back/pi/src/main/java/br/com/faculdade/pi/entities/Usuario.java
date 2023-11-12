package br.com.faculdade.pi.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;

@Entity
public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUsuario;
    private String nome;
    private String email;
    private String senha;
    private boolean admin;

    public Usuario(){}

    public Usuario(String nome, String email, String senha, boolean admin){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.admin = admin;
    }

    public Boolean getAdmin(){
        return this.admin;
    }

    public void setAdmin(boolean admin){
        this.admin = admin;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public int getIdUsuario() {
        return idUsuario;
    }
}
