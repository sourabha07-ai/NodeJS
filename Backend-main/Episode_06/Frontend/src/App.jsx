import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const API = import.meta.env.VITE_API_URL

function App() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [editId, setEditId] = useState(null)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  // --- 1. READ ALL (GET /) ---
  const { data: allNotes, isLoading } = useQuery({
    queryKey: ["notes"],
    queryFn: () => axios.get(API).then(res => res.data)
  })

  // --- 3. CREATE (POST /) ---
  const addMutation = useMutation({
    mutationFn: (note) => axios.post(API, note),
    onSuccess: () => queryClient.invalidateQueries("notes")
  })

  // --- 4. UPDATE (PUT /:id) ---
  const updateMutation = useMutation({
    mutationFn: ({ id, note }) => axios.put(`${API}/${id}`, note),
    onSuccess: () => {
      queryClient.invalidateQueries("notes")
      setEditId(null)
    }
  })

  // --- 5. DELETE (DELETE /:id) ---
  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`${API}/${id}`),
    onSuccess: () => queryClient.invalidateQueries("notes")
  })

  function handleSubmit(e) {
    e.preventDefault()
    if (editId) {
      updateMutation.mutate({ id: editId, note: { title, content } })
    } else {
      addMutation.mutate({ title, content })
    }
    setTitle("")
    setContent("")
  }

  function startEdit(note) {
    setEditId(note._id)
    setTitle(note.title)
    setContent(note.content)
  }

  function cancelEdit() {
    setEditId(null)
    setTitle("")
    setContent("")
  }

  return (
    <div className="container">
      <h1>Notes App</h1>

      {/* CREATE / UPDATE */}
      <form onSubmit={handleSubmit}>
        <h3>{editId ? "Edit Note" : "Add Note"}</h3>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} required />
        <button type="submit" disabled={addMutation.isPending || updateMutation.isPending}>
          {editId ? "Update Note" : "Add Note"}
        </button>
        {editId && <button type="button" className="cancel" onClick={cancelEdit}>Cancel</button>}
      </form>

      {isLoading && <p className="loading">Loading notes...</p>}

      <div className="notes">
        {allNotes?.data?.length === 0 && <p className="empty">No notes yet. Add one above!</p>}
        {allNotes?.data?.map(note => (
          <div key={note._id} className="note">
            <div className="note-body">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
            <div className="note-actions">
              {/* READ SINGLE — new page par redirect */}
              <button className="view" onClick={() => navigate(`/note/${note._id}`)}>View</button>
              <button className="edit" onClick={() => startEdit(note)}>Edit</button>
              <button className="delete" onClick={() => deleteMutation.mutate(note._id)} disabled={deleteMutation.isPending}>
                {deleteMutation.isPending ? "..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
