So far, we only have one functional file in our project: hello_world.py. A real-world web project usually has more files than that. It's important to maintain a good directory structure, so as to organize the different components of the application separately. These are a few of the common directories in a Flask project:

/app: This is a directory within my-project . We'll put all our code in here, and leave other files, such as the requirements.txt file, outside.

/app/templates: This is where our HTML files will go.

/app/static: This is where static files such as CSS and JavaScript files as well as images usually go. However, we won't be needing this folder for this tutorial since we won't be using any static files.