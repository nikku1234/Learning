So far, we only have one functional file in our project: hello_world.py. A real-world web project usually has more files than that. It's important to maintain a good directory structure, so as to organize the different components of the application separately. These are a few of the common directories in a Flask project:

/app: This is a directory within my-project . We'll put all our code in here, and leave other files, such as the requirements.txt file, outside.

/app/templates: This is where our HTML files will go.

/app/static: This is where static files such as CSS and JavaScript files as well as images usually go. However, we won't be needing this folder for this tutorial since we won't be using any static files.


For the "Hello World!" example, we only had one file. To build our website, we'll need more files that serve various functions. Most Flask apps have the following basic file structure:

run.py: This is the application's entry point. We'll run this file to start the Flask server and launch our application.
config.py: This file contains the configuration variables for your app, such as database details.
app/__init__.py: This file intializes a Python module. Without it, Python will not recognize the app directory as a module.
app/views.py: This file contains all the routes for our application. This will tell Flask what to display on which path.
app/models.py: This is where the models are defined. A model is a representation of a database table in code. However, because we will not be using a database in this tutorial, we won't be needing this file.
Some projects have more modules (for example, an app/views directory with many views files in it), but this'll do for now. Go ahead and create these files, and delete hello_world.py since we won't be needing it anymore:

$ touch run.py config.py