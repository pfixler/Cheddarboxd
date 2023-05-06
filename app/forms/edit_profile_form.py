from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField
from wtforms.validators import DataRequired

class EditProfileForm(FlaskForm):
    StringField("name", validators=[DataRequired()])
