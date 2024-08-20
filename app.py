from flask import Flask, render_template, request, redirect, url_for, session
from dotenv import load_dotenv
import json
import os


app = Flask(__name__)


load_dotenv()  # Here I set a secret key for session management
app.secret_key = os.environ.get('APP_SECRET_KEY')
admin_user = os.environ.get('USERNAMES')
admin_pass = os.environ.get('PASSWORD')


# Load films from JSON file
def load_films():
    with open('films.json', 'r') as file:
        return json.load(file)


# Save films to JSON file
def save_films(films):
    with open('films.json', 'w') as file:
        json.dump(films, file, indent=4)


films = load_films()  # Load films at startup


@app.route("/")
@app.route("/home")
@app.route("/index")
def home():
    return render_template("index.html", latest_films=films)


@app.route("/films")
def showfilms():
    return render_template("films.html", films=films)


@app.route("/details/<int:film_id>")
def film_details(film_id):
    global films
    for film in films:
        if film['id'] == film_id:
            film_detail = film
    return render_template("film_details.html", film=film_detail, films=films)


@app.route("/bts")
def bts():
    return render_template("bts.html")


@app.route("/collaborations")
def collaborations():
    return render_template("collaborations.html", films=films)


@app.route("/about")
def about():
    return render_template("about.html", films=films)


@app.route("/login", methods=['GET'])
def login():
    return render_template("login.html")


# Route for handling the login form submission
@app.route('/login', methods=['POST'])
def login_route():
    username = request.form.get('username')
    password = request.form.get('password')
    if username == admin_user and admin_pass == password:
        # Authentication successful
        session['username'] = username
        # Redirect to upload page after successful login
        return redirect(url_for('upload'))
    else:
        # Authentication failed
        render_template('login.html', error='Invalid username or password')


# Route for logging out
@app.route('/logout')
def logout():
    session.pop('username', None)  # Remove username from session
    return redirect(url_for('login'))  # Redirect to login page after logout


next_id = max(film['id'] for film in films) + 1 if films else 1
# ID for the next film entry


# Route for rendering the upload page
@app.route('/upload', methods=['GET'])
def upload():
    if 'username' in session:
        # Render the upload page if user is logged in
        return render_template('upload.html', films=films)
    else:
        # Redirect to login page if user is not logged in
        return redirect(url_for('login'))


# Route for adding a new film
@app.route('/add_film', methods=['POST'])
def add_film():
    global next_id
    title = request.form.get('title')
    description = request.form.get('description')
    genre = request.form.get('genre')
    duration = request.form.get('duration')
    release_year = request.form.get('release_year')
    director = request.form.get('director')
    cast = request.form.get('cast').split(',')
    link = request.form.get('link')
    thumbnail = request.form.get('thumbnail')  # Get the thumbnail URL

    # Add the new film to the films list
    films.append({
        'id': next_id,
        'title': title,
        'description': description,
        'genre': genre,
        'duration': duration,
        'release_year': int(release_year),
        'director': director,
        'cast': cast,
        'link': link,
        'thumbnail': thumbnail  # Add the thumbnail URL to the film entry
    })
    next_id += 1

    save_films(films)  # Save films to JSON file
    # Redirect to the upload page after adding the film
    return redirect(url_for('upload'))


# Route for deleting a film
@app.route('/delete_film/<int:film_id>', methods=['GET'])
def delete_film(film_id):
    global films
    # Remove the film with the given ID
    films = [film for film in films if film['id'] != film_id]
    save_films(films)  # Save films to JSON file
    # Redirect to the upload page after deleting the film
    return redirect(url_for('upload'))


# Route for editing a film
@app.route('/edit_film/<int:film_id>', methods=['GET', 'POST'])
def edit_film(film_id):
    film = next((film for film in films if film['id'] == film_id), None)
    if film:
        if request.method == 'POST':
            film['title'] = request.form.get('title')
            film['description'] = request.form.get('description')
            film['genre'] = request.form.get('genre')
            film['duration'] = request.form.get('duration')
            film['release_year'] = int(request.form.get('release_year'))
            film['director'] = request.form.get('director')
            film['cast'] = request.form.get('cast').split(',')
            film['link'] = request.form.get('link')
            # Update the thumbnail URL
            film['thumbnail'] = request.form.get('thumbnail')
            save_films(films)  # Save films to JSON file
            # Redirect to the upload page after editing the film
            return redirect(url_for('upload'))
        else:
            # Render the edit film page
            return render_template('edit_film.html', film=film)
    else:
        return 'Film not found', 404


if __name__ == "__main__":
    port = os.environ.get("PORT") if os.environ.get("PORT") else 443
    app.run(host="0.0.0.0")  # View site on this link http://127.0.0.1:5000
