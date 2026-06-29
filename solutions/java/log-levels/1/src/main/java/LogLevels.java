public class LogLevels {
    
    public static String message(String logLine) {
        int startOfMessage = logLine.indexOf(':') +1;
        
        String message = logLine.substring(startOfMessage).trim();
        return message;

    }

    public static String logLevel(String logLine) {
        // String message = logLine.replaceAll("\\[\\]", "\"\"");
        int start = logLine.indexOf('[') + 1;
        int end = logLine.indexOf(']');
        
        String logLevel = logLine.substring(start, end).toLowerCase();
        
        return logLevel;
    }

    public static String reformat(String logLine) {
        String message = message(logLine);
        String logLevel = logLevel(logLine);
        String reformat = message + " (" + logLevel + ")";

        return reformat;
    }
}
