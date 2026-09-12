import express, { Router } from 'express'
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notes.controller.js'

export const notesRouter = Router()

// get 
notesRouter.get('/',getAllNotes)
notesRouter.get('/:id',getNoteById)
notesRouter.post('/',createNote)
notesRouter.put('/:id',updateNote)
notesRouter.delete('/:id',deleteNote)

