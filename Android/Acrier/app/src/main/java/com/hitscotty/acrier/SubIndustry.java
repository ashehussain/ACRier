package com.hitscotty.acrier;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class SubIndustry extends AppCompatActivity {

    public final static String EXTRA_MESSAGE = "com.hitscott.acrier.SUBINDUSTRY";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sub_industry);
        Intent intent = getIntent();

    }

    protected void getImageParser(View view){
        Intent intent = new Intent(this, ImageParser.class);
        intent.putExtra(EXTRA_MESSAGE, "");
        startActivity(intent);
    }
}
