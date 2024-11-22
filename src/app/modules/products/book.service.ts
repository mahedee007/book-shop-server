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

const getBookDB = async (id : string)=>{
    const result = await bookModel.findOne({id});
    return result;
}
//Implement Update a book item

const updateBookDB = async (id: string, book: Tbook)=>{
    const result = await bookModel.updateOne({id}, book);
    return result;
}


//delete a book item

const deleteBookDB = async (id: string)=>{
    const result = await bookModel.deleteOne({id});
    return result;
}
export const bookService = {
    createBookDB,
    getBooksDB,
    getBookDB,
    updateBookDB,
    deleteBookDB
};
