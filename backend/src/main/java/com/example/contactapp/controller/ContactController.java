package com.example.contactapp.controller;

import com.example.contactapp.model.Contact;
import com.example.contactapp.repository.ContactRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/contacts")
public class ContactController {
    @Autowired
    private ContactRepository repository;

    @GetMapping
    public List<Contact> getAllContacts() {
        return repository.findAll();
    }

    @PostMapping
    public Contact addContact(@RequestBody @Valid Contact contact) {
        return repository.save(contact);
    }

    @PutMapping("/{id}")
    public Contact updateContact(@PathVariable Long id, @RequestBody @Valid Contact contactDetails) {
        return repository.findById(id).map(contact -> {
            contact.setName(contactDetails.getName());
            contact.setEmail(contactDetails.getEmail());
            contact.setPhone(contactDetails.getPhone());
            return repository.save(contact);
        }).orElseThrow(() -> new RuntimeException("Contact not found"));
    }

    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
