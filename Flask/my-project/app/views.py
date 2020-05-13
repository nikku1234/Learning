from app import app
from flask import render_template

# views.py


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/about')
def about():
    return render_template("about.html")


# From the "Hello World!" example, you already have an understanding of how views work.
#  We use the @ app.route decorator to specify the path we'd like the view to be dispayed on. 
# We've already seen how to write a view that returns a string. Let's see what else we can do with views.
