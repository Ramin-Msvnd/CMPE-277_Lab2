package com.mysecond;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.content.Intent;
import android.net.Uri;
import android.app.Activity;
import android.content.Context;
import android.util.Log;

public class IntentLauncher extends ReactContextBaseJavaModule {
    Context context;

    IntentLauncher(ReactApplicationContext context) {
        super(context);
        this.context = context.getApplicationContext();
    }

    // add to CalendarModule.java
    @Override
    public String getName() {
        return "IntentLauncher";
    }

    @ReactMethod
    public void uninstallApp() {
        Intent intent = new Intent(Intent.ACTION_DELETE);
        intent.setData(Uri.parse("package:"+context.getPackageName()));
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }
}