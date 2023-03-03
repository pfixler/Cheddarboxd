from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    # watched = BooleanField("watched", validators=[DataRequired()])
    watch_date = StringField("watch_date")
    rating = FloatField("rating")
    like = BooleanField("like")
    content = StringField("content")
    created_at = StringField("created_at", validators=[DataRequired()])
    updated_at = StringField("updated_at")
