import { useState, useEffect } from "react";
import { getContacts, addContact, updateContact, deleteContact, Contact } from "./api";
import {
  Container, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, Dialog, DialogActions, DialogContent, DialogTitle
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContact, setNewContact] = useState<Contact>({ name: "", email: "", phone: "" });
  const [open, setOpen] = useState(false);
  const [editContact, setEditContact] = useState<Contact | null>(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const response = await getContacts();
    setContacts(response.data);
  };

  const handleAdd = async () => {
    if (!newContact.name || !newContact.email || !newContact.phone) return;
    await addContact(newContact);
    setNewContact({ name: "", email: "", phone: "" });
    loadContacts();
  };

  const handleEditClick = (contact: Contact) => {
    setEditContact(contact);
    setOpen(true);
  };

  const handleEditSave = async () => {
    if (editContact) {
      await updateContact(editContact.id!, editContact);
      setOpen(false);
      loadContacts();
    }
  };

  const handleDelete = async (id: number) => {
    await deleteContact(id);
    loadContacts();
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <h2>Contact Manager</h2>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newContact.email}
          onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newContact.phone}
          onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleAdd}>
          Add Contact
        </Button>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEditClick(contact)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(contact.id!)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={editContact?.name || ""}
            onChange={(e) => setEditContact((prev) => prev ? { ...prev, name: e.target.value } : null)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={editContact?.email || ""}
            onChange={(e) => setEditContact((prev) => prev ? { ...prev, email: e.target.value } : null)}
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
            value={editContact?.phone || ""}
            onChange={(e) => setEditContact((prev) => prev ? { ...prev, phone: e.target.value } : null)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleEditSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default App;
