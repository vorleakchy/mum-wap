package cs472.mum.edu.model;

public class Question {
    private String question;
    private String answer;
    private String hint;

    public Question(String question, String answer, String hint) {
        this.question = question;
        this.answer = answer;
        this.hint = hint;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }

    public String getHint() {
        return hint;
    }

    @Override
    public String toString() {
        return question;
    }
}
