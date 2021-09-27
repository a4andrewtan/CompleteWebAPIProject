package sg.edu.tp.musicstream;

import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;



public class MyView extends RecyclerView.ViewHolder {

    public TextView quotationTxt;
    public TextView authorTxt;
    public MyView(@NonNull View itemView) {
        super(itemView);

        quotationTxt = itemView.findViewById(R.id.quotation);
        authorTxt = itemView.findViewById(R.id.author);

    }
}
