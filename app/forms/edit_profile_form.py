from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField
from wtforms.validators import DataRequired
from app.forms import user_exists, is_email, password_length, username_exists


# different form and or route for changing username and email

class EditProfileForm(FlaskForm):
    username = StringField("username", validators=[DataRequired()])
    email = StringField("email", validators=[DataRequired(), is_email])
    first_name = StringField("first_name")
    last_name = StringField("last_name")
    location = StringField("location")
    website = StringField("website")
    bio = StringField("bio")
