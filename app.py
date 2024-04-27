from flask import Flask, render_template, request, redirect, url_for, session
import os

app = Flask(__name__)

app.secret_key = 'your_secret_key_here'  # Set a secret key for session management (replace with a secure secret key)

# Dummy user credentials (replace with your actual authentication mechanism)
users = {
    'admin': 'adminpassword'
}

@app.route("/")
@app.route("/home")
@app.route("/index")
def home():
     return render_template("index.html")
 
@app.route("/films")
def films():
    return render_template("films.html")

@app.route("/bts")
def bts():
    return render_template("bts.html")

@app.route("/collaborations")
def collaborations():
    return render_template("collaborations.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/neonvibes")
def neonvibes():
    return render_template("neonvibes.html")

@app.route("/kidnapped")
def kidnapped():
    return render_template("kidnapped.html")

@app.route("/onceuponatime")
def onceuponatime():
    return render_template("onceuponatime.html")

@app.route("/killersanta")
def killersanta():
    return render_template("killersanta.html")

@app.route("/login", methods=['GET'])
def login():
    return render_template("login.html")


# Route for handling the login form submission
@app.route('/login', methods=['POST'])
def login_route():
    username = request.form.get('username')
    password = request.form.get('password')
    
    if username in users and users[username] == password:
        # Authentication successful
        session['username'] = username  # Store username in session
        return redirect(url_for('upload'))  # Redirect to upload page after successful login
    else:
        # Authentication failed
        return render_template('login.html', error='Invalid username or password')

# Route for logging out
@app.route('/logout')
def logout():
    session.pop('username', None)  # Remove username from session
    return redirect(url_for('login'))  # Redirect to login page after logout


films = [
    {'id': 1, 'title': 'Film 1', 'description': 'Description 1', 'link': 'link1'},
    {'id': 2, 'title': 'Film 2', 'description': 'Description 2', 'link': 'link2'}
]
next_id = 3  # ID for the next film entry

# Route for rendering the upload page
@app.route('/upload', methods=['GET'])
def upload():
    if 'username' in session:
        return render_template('upload.html', films=films)  # Render the upload page if user is logged in
    else:
        return redirect(url_for('login'))  # Redirect to login page if user is not logged in

# Route for adding a new film
@app.route('/add_film', methods=['POST'])
def add_film():
    global next_id
    title = request.form.get('title')
    description = request.form.get('description')
    link = request.form.get('link')
    
    # Add the new film to the films list
    films.append({'id': next_id, 'title': title, 'description': description, 'link': link})
    next_id += 1
    
    return redirect(url_for('upload'))  # Redirect to the upload page after adding the film

# Route for deleting a film
@app.route('/delete_film/<int:film_id>', methods=['GET'])
def delete_film(film_id):
    global films
    films = [film for film in films if film['id'] != film_id]  # Remove the film with the given ID
    return redirect(url_for('upload'))  # Redirect to the upload page after deleting the film

# Route for editing a film
@app.route('/edit_film/<int:film_id>', methods=['GET', 'POST'])
def edit_film(film_id):
    film = next((film for film in films if film['id'] == film_id), None)
    if film:
        if request.method == 'POST':
            film['title'] = request.form.get('title')
            film['description'] = request.form.get('description')
            film['link'] = request.form.get('link')
            return redirect(url_for('upload'))  # Redirect to the upload page after editing the film
        else:
            return render_template('edit_film.html', film=film)  # Render the edit film page
    else:
        return 'Film not found', 404

if __name__=="__main__":
    app.run(host="0.0.0.0", port=os.environ['PORT'])
