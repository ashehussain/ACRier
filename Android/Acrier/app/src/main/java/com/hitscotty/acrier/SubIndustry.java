package com.hitscotty.acrier;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.List;

public class SubIndustry extends AppCompatActivity {

    public final static String EXTRA_MESSAGE = "com.hitscott.acrier.SUBINDUSTRY";
    private ListView reports;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sub_industry);
        Intent intent = getIntent();

        reports = (ListView) findViewById(R.id.reportlist);

        /* read from database the report objects */
        List<String> myReports = new ArrayList<String>();
        for(int i = 0; i < 10; i++){
            myReports.add("Reports" + i);
        }

        ArrayAdapter<String> arrayAdapter = new ArrayAdapter<String>(
                this,
                android.R.layout.simple_list_item_1,
                myReports );

        reports.setAdapter(arrayAdapter);
    }

    protected void getImageParser(View view){
        Intent intent = new Intent(this, ImageParser.class);
        intent.putExtra(EXTRA_MESSAGE, "");
        startActivity(intent);
    }
}
