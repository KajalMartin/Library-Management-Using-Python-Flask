from flask import Blueprint, render_template, request


auth_bp = Blueprint('auth', __name__)


@auth_bp.route("/")
def home():
    return render_template("index.html")

@auth_bp.route("/login")
def login():
    register = request.args.get('register')
    if register:
        return render_template("login.html", register=True)
    

@auth_bp.route("/fg_pass")
def fg_pass():
    return render_template("fg_pass.html")