package cs472.mum.edu;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentDateTime extends SimpleTagSupport {
    String color;
    String size;

    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();
        String style = "";
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");

        if (color != null)
            style += String.format("color: %s;", color);

        if (size != null)
            style += String.format("font-size: %s;", size);

        String html = String.format("<span style=\"%s\">%s</span>", style, ft.format(dNow));

        out.write(html);
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
