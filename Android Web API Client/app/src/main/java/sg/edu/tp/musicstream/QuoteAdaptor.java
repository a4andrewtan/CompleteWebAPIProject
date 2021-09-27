
package sg.edu.tp.musicstream;

        import android.annotation.SuppressLint;
        import android.content.Context;
        import android.support.annotation.NonNull;
        import android.support.v7.widget.RecyclerView;
        import android.util.Log;
        import android.view.LayoutInflater;
        import android.view.View;
        import android.view.ViewGroup;
        import android.widget.Filter;
        import android.widget.Filterable;
        import android.widget.TextView;


        import java.util.ArrayList;
        import java.util.List;

public class QuoteAdaptor extends RecyclerView.Adapter<MyView>  {
    private List<Quotation> mContacts;
    Context context ;
    public QuoteAdaptor(List<Quotation> mContacts) {
        this.mContacts = mContacts;
    }

    @NonNull
    @Override
    public MyView onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        context = parent.getContext();
        LayoutInflater inflater = LayoutInflater.from(context);

        // Inflate the custom layout
        View contactView = inflater.inflate(R.layout.item_quote, parent, false);
        MyView viewHolder = new MyView(contactView);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull MyView holder, @SuppressLint("RecyclerView") final int position) {
        Quotation contact = mContacts.get(position);

        // Set item views based on your views and data model
        TextView quotation = holder.quotationTxt;
        TextView author = holder.authorTxt;
        quotation.setText("" + (position+1) + ". "+ contact.getQuotation());
        author.setText(contact.getAuthor());
    }

    @Override
    public int getItemCount() {
        return mContacts.size();
    }


}
