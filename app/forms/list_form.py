from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField
from wtforms.validators import DataRequired


class ListForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    description = StringField("description")
    public_list = BooleanField("public_list")
    created_at = StringField("created_at", validators=[DataRequired()])
    updated_at = StringField("updated_at")
    list_movies = StringField("list_movies")
