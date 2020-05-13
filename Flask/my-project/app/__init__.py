# Note that if we set instance_relative_config to True, we can use app.config.from_object('config') to load the config.py file.
# app/__init__.py

from app import views  # Load the views
from flask import Flask

# Initialize the app
app = Flask(__name__, instance_relative_config=True)

# Load the config file
app.config.from_object('config')
