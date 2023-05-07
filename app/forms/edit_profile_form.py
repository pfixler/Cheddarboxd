from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField
from wtforms.validators import DataRequired
from app.forms import user_exists, is_email, password_length, username_exists

class EditProfileForm(FlaskForm):
    username = StringField("username", validators=[DataRequired(), username_exists])
    email = StringField("email", validators=[DataRequired(), user_exists, is_email])
    first_name = StringField("first_name")
    last_name = StringField("last_name")
    location = StringField("location")
    website = StringField("website")
    bio = StringField("bio")
