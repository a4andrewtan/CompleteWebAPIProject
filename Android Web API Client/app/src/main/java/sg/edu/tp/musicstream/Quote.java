package sg.edu.tp.musicstream;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;

import com.android.volley.*;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class Quote extends AppCompatActivity {

    public static ArrayList<Quotation> list = new ArrayList<Quotation>();
    QuoteAdaptor adapter;
    RecyclerView quoteListing;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_quote);
        quoteListing = findViewById(R.id.list);


    }

    public void fetchRandomQuotes(View view) {
        fetchQuotes("http://192.168.5.185:8080/random");
    }

    public void fetchAllQuotes(View view) {
        fetchQuotes("http://192.168.5.185:8080/quotes");

    }

    private void fetchQuotes(String url) {

        RequestQueue queue = Volley.newRequestQueue(this);


        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Gson gson = new Gson();
                TypeToken<ArrayList<Quotation>> token = new TypeToken<ArrayList<Quotation>>(){};

                try {

                    JSONArray heroArray = response.getJSONArray("results");
                    list = gson.fromJson(heroArray.toString(),token.getType());
                    adapter = new QuoteAdaptor(list);
                    quoteListing.setAdapter(adapter);
                    // Set layout manager to position the items
                    quoteListing.setLayoutManager(new LinearLayoutManager(getApplicationContext()));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                error.printStackTrace();
            }
        });




// Add the request to the RequestQueue.
        queue.add(jsonObjectRequest);
    }


    public void addNewQuotes(View view) {

        Intent intent = new Intent(this,AddQuote.class);
        startActivity(intent);
    }
}