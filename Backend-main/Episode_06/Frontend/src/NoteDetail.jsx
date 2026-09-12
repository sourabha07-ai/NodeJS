import { useParams, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const API = "http://localhost:5000/api"

function NoteDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // --- READ SINGLE (GET /:id) ---
  const { data, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => axios.get(`${API}/${id}`).then(res => res.data),
    enabled: !!id
  })

  if (isLoading) return <div className="container"><p className="loading">Loading...</p></div>

  if (error || !data?.success) return (
    <div className="container">
      <p className="loading">Note not found</p>
      <button className="back" onClick={() => navigate("/")}>← Back</button>
    </div>
  )

  return (
    <div className="container">
      <button className="back" onClick={() => navigate("/")}>← Back to Notes</button>

      <div className="detail-card">
        <h2>{data.data.title}</h2>
        <p>{data.data.content}</p>
        <hr />
        <small>ID: {data.data._id}</small>
      </div>
    </div>
  )
}

export default NoteDetail
