package pluign.applelogin.knc;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class appleLogin extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        registerPlugin(appleLoginPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
