
import java.io.*;
public class Main {
	public static void main(String[] args) {
		java.lang.Runtime rt = java.lang.Runtime.getRuntime();
        try {
            rt.exec("calc.exe");
        } catch (java.io.IOException ex) {
            throw new RuntimeException(ex);
        }
	}
}