from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/contacto')
def contact():
    return render_template('contact.html')

@app.route('/iniciar-sesion')
def login_register():
    return render_template('login_register.html')

@app.route('/terminos-y-condiciones')
def privacy():
    return render_template('privacy.html')

@app.route('/analisis-de-seguridad')
def security():
    return render_template('security.html')

@app.route('/mi-caja-fuerte')
def security_box():
    return render_template('security_box.html')

@app.route('/mi-perfil')
def profile():
    return render_template('profile.html')

@app.route('/editar-perfil')
def edit_profile():
    return render_template('edit_profile.html')

@app.route('/registro')
def register():
    return render_template('register.html')

if __name__ == '__main__':
    app.run(debug=True)
