from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, redirect, url_for, session
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship

app = Flask(__name__, static_folder='static', template_folder='templates')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///quiz_database.db'
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    highscore = db.Column(db.Integer)
    currentScore = db.Column(db.Integer)
    quizzesDone = db.Column(db.Integer)

class Quiz(db.Model):
    __tablename__ = 'quizzes'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    questions = db.relationship("Question", back_populates="quiz")

class Question(db.Model):
    __tablename__ = 'questions'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String)
    correct_answer_id = db.Column(db.Integer)
    quiz_id = db.Column(db.Integer, db.ForeignKey('quizzes.id'))
    quiz = db.relationship("Quiz", back_populates="questions")
    answers = db.relationship("Answer", back_populates="question")

class Answer(db.Model):
    __tablename__ = 'answers'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String)
    is_correct = db.Column(db.Boolean)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'))
    question = db.relationship("Question", back_populates="answers")

with app.app_context():
    db.create_all()
    print("Tables created:", db.metadata.tables.keys())

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        # Check if the user already exists
        existing_user = User.query.filter_by(username=username).first()
        
        if existing_user is None:
            # Only create a new user if one does not exist
            new_user = User(username=username, highscore=0, currentScore=0, quizzesDone=0)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for("new_redirect_route", username=username))
        else:
            # If the user exists, redirect to the new_redirect_route
            return redirect(url_for("new_redirect_route", username=username))
    else:
        # If it's a GET request, just render the login form
        return render_template("form.html")  

@app.route("/Confirmation", methods=["POST"])
def Confirmation():
    if request.method == "POST":
        username = request.form["username"]
        # Check if the user already exists
        existing_user = User.query.filter_by(username=username).first()
        
        if existing_user is None:
            # Only create a new user if one does not exist
            new_user = User(username=username, highscore=0, currentScore=0, quizzesDone=0)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for("new_redirect_route", username=username))
        else:
            # If the user exists, redirect to the new_redirect_route
            return redirect(url_for("new_redirect_route", username=username))

@app.route("/")
def index():
    return render_template("form.html")

@app.route("/new_redirect_route")
def new_redirect_route():
    username = request.args.get('username')
    return render_template("index.html", username=username)

@app.route("/update_score", methods=["POST"])
def update_score():
    score = int(request.form["Score"])
    username = request.form["username"]  
    print("Score received:", request.form["Score"])
    print("Username received:", request.form["username"])
    user = User.query.filter_by(username=username).first()

    if user is not None:
        user.currentScore = score

        if score > user.highscore:
            user.highscore = score

        user.quizzesDone += 1

        db.session.commit()

    return render_template("ConfirUser.html")

@app.route("/createQuiz", methods=["GET", "POST"])
def createQuiz():
    if request.method == "POST":
        quiz_name = request.form['quiz_name']
        questions = request.form.getlist('question')
        correct_answers = request.form.getlist('correct_answer')
        incorrect_answers_1 = request.form.getlist('incorrect_answer_1')
        incorrect_answers_2 = request.form.getlist('incorrect_answer_2')
        incorrect_answers_3 = request.form.getlist('incorrect_answer_3')
        
        # Create new quiz
        quiz = Quiz(name=quiz_name)
        db.session.add(quiz)
        db.session.flush()  # This will assign an ID to quiz without committing the transaction

        # Create new questions and answers
        for i, question_text in enumerate(questions):
            question = Question(text=question_text, quiz_id=quiz.id)
            db.session.add(question)
            db.session.flush()  # Assign an ID to question
            
            # Add correct answer
            correct = Answer(text=correct_answers[i], is_correct=True, question_id=question.id)
            db.session.add(correct)

            # Add incorrect answers
            for incorrect_text in (incorrect_answers_1[i], incorrect_answers_2[i], incorrect_answers_3[i]):
                incorrect = Answer(text=incorrect_text, is_correct=False, question_id=question.id)
                db.session.add(incorrect)

        db.session.commit()  # Now commit all the new records
        

        return redirect(url_for('new_redirect_route'))
    else:
        # If it's a GET request, just render the quiz creation form
        return render_template("createQuiz.html")
    
@app.route("/playQuiz/<int:quiz_id>", methods=["GET"])
def play_quiz(quiz_id):
    quiz = Quiz.query.get_or_404(quiz_id)
    questions = [
        {
            'id': question.id,
            'text': question.text,
            'answers': [
                {'id': answer.id, 'text': answer.text} for answer in question.answers
            ]
        }
        for question in quiz.questions
    ]
    return render_template("playQuiz.html", quiz=quiz, questions=questions)

@app.route("/check_answers", methods=["POST"])
def check_answers():
     return redirect(url_for('new_redirect_route'))

@app.route('/user/<int:user_id>')
def show_user(user_id):
     user = User.query.get(user_id)
     if user is not None:
         return redirect(url_for('new_redirect_route', username=user.username))
     else:
         return 'User not found', 404


    
if __name__ == '__name__':
    app.run(debug=True)
