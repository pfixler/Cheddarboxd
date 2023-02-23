from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    watched = BooleanField("watched", validators=[DataRequired()])
    watch_date = StringField("watch_data")
    rating = FloatField("rating")
    like = BooleanField("like")
    content = StringField("content", validators=[DataRequired()])
    created_at = StringField("created_at", validators=[DataRequired()])
    updated_at = StringField("updated_at")
