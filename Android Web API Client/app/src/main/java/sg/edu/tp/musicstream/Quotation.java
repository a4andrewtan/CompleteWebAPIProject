package sg.edu.tp.musicstream;

public class Quotation {
    private String id;
    private String author;
    private String quotation;

    public String getId() {
        return id;
    }

    public String getAuthor() {
        return author;
    }

    public String getQuotation() {
        return quotation;
    }

    public Quotation(String id, String author, String quotation) {
        this.id = id;
        this.author = author;
        this.quotation = quotation;
    }
}
