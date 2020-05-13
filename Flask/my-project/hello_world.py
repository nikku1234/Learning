from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

# We begin by importing the Flask class, and creating an instance of it. 
# We use the __name__ argument to indicate the app's module or package, so that Flask knows where to find other files such as templates. 
# Then we have a simple function that will display the string Hello World!. 
# The preceeding decorator simply tells Flask which path to display the result of the function. 
# In this case, we have specified the route /, which is the home URL.
