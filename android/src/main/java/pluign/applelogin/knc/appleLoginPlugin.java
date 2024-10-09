package pluign.applelogin.knc;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "appleLogin")
public class appleLoginPlugin extends Plugin {

    private appleLogin implementation = new appleLogin();

    @PluginMethod
    public void appleLogin(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();

        ret.put("result", "appleLogin은 Ios에서만 실행됩니다.");
        call.resolve(ret);
    }
}
