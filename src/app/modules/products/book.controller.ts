import { Request, Response } from "express";
import { bookService } from "./book.service";


//Creat a new book
const createBook = async (req: Request, res: Response)=>{

    try{
        const products = req.body;
    const result = await bookService.createBookDB(products);

    res.status(200).json({
        success: true,
        message: "Book created successfully",
        data: result
    })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Error creating book",
            err
        })
    }

}

//Get all books
const getAllBooks = async (req: Request, res: Response)=>{
    try{
        
        const result = await bookService.getBooksDB();
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: result
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Error retrieving books",
            err
        })
    }
}

//Find One Book

const getSingleBook = async (req: Request, res: Response)=>{
    try{
        const id = req.params.id
        const result = await bookService.getBookDB(id)
        res.send({
            status: true,
            message: "Book retrieved successfully",
            data: result
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Error retrieving book",
            err
        })
    }
}

//Update a book

const updateBook = async (req: Request, res: Response)=>{
    try{
       
        const id = req.params.id;
        const book = req.body
        const result = await bookService.updateBookDB( id,book)
        res.send({
            status: true,
            message: "Book updated successfully",
            data: {book, result}
            
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Error updating book",
            err
        })
    }
}

//Delete a book
const deleteBook = async (req: Request, res: Response)=>{
    try{
        const id = req.params.id;
    const result = await bookService.deleteBookDB(id)
    res.send({
        status: true,
        message: "Book deleted successfully",
        data: result
    })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Error deleting book",
            err
        })
    }
}

export const bookController={
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook ,
    deleteBook
}