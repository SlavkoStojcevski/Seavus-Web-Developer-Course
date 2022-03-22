const i_Robot={
    bookName: "I Robot",
    bookPrice: 1000,
    bookAuthor: "Isaak Asimov",
    bookReleaseDate: "02.12.1950",
    bookPages: 253
};
let printBookInfo=require("./book");
printBookInfo.printBookInfo(i_Robot);