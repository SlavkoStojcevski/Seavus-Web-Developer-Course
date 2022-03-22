let printBookInfo=function(object){
    this.bookName=object.bookName;
    this.bookPrice=object.bookPrice;
    this.bookAuthor=object.bookAuthor;
    this.bookReleaseDate=object.bookReleaseDate;
    this.bookPages=object.bookPages;
}
module.exports= {printBookInfo};