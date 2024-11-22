import { Tbook } from "./book.interface";
import { bookModel } from "./book.model";


//Implement Creat a book item
const createBookDB = async (book : Tbook)=>{
    const result = await bookModel.create(book);
    return result;
}

//Implement Get all book items
const getBooksDB = async ()=>{
    const result = await bookModel.find();
    return result;
}
//Implement get a single book item

const getBookDB = async (_id : string)=>{
    const result = await bookModel.findOne({_id});
    return result;
}
//Implement Update a book item

const updateBookDB = async (_id: string, book: Tbook)=>{
    const result = await bookModel.updateOne({_id}, book);
    return result;
}


//delete a book item

const deleteBookDB = async (_id: string)=>{
    const result = await bookModel.deleteOne({_id});
    return result;
}
export const bookService = {
    createBookDB,
    getBooksDB,
    getBookDB,
    updateBookDB,
    deleteBookDB
};
