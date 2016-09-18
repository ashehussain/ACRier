package com.hitscotty.acrier;

import android.app.Activity;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

public class Industry extends Activity {

    public final static String EXTRA_MESSAGE = "com.hitscott.acrier.INDUSTRY";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_industry);
        Intent intent = getIntent();
    }

    protected void getSubIndustry(View view){
        Intent intent = new Intent(this, SubIndustry.class);
        intent.putExtra(EXTRA_MESSAGE, "");
        startActivity(intent);

    }
}
