from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = "the-secret-key"
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///library.db'

    db.init_app(app)

    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp)

    return app