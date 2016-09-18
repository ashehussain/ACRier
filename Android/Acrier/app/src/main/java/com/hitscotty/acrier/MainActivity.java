package com.hitscotty.acrier;

import android.content.Intent;
import android.graphics.Bitmap;
import android.provider.MediaStore;
import android.support.annotation.IdRes;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity{

    /* Image Parser */
    static final int REQUEST_IMAGE_CAPTURE = 1;
    private Bitmap imageBitmap = null;

    /* main */
    public final static String EXTRA_MESSAGE = "com.hitscott.acrier.LOGIN";

    EditText phone;
    EditText password;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }


    /*Image Parser */
    public void dispatchTakePictureIntent(View view) {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        startActivityForResult(intent,0);

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode,resultCode,data);
        imageBitmap = (Bitmap) data.getExtras().get("data");

    }

    /*check database for credentials and return access here */
    protected void login(View view){
        phone = (EditText) findViewById(R.id.phoneLogin);
        password = (EditText) findViewById(R.id.passwordLogin);
        Intent intent = new Intent(this, Industry.class);
        intent.putExtra(EXTRA_MESSAGE, "");

        String usr = phone.getText().toString();
        String pass = password.getText().toString();
        if(usr.equals("1234") && pass.equals("1234")){
            startActivity(intent);
        }

    }


}
